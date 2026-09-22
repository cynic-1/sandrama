#!/usr/bin/env python3
"""Small token-protected public upload service for SandDrama reference media."""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
import json
import mimetypes
import os
import re
import secrets
import time

HOST = os.environ.get("UPLOAD_HOST", "127.0.0.1")
PORT = int(os.environ.get("UPLOAD_PORT", "18080"))
TOKEN = os.environ.get("UPLOAD_TOKEN", "")
UPLOAD_DIR = Path(os.environ.get("UPLOAD_DIR", "/var/lib/sandrama-upload"))
PUBLIC_BASE_URL = os.environ.get("PUBLIC_BASE_URL", "")
MAX_BYTES = int(os.environ.get("MAX_UPLOAD_BYTES", str(100 * 1024 * 1024)))

if not TOKEN:
    raise SystemExit("UPLOAD_TOKEN is required")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


def json_response(handler, status, payload):
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


class Handler(BaseHTTPRequestHandler):
    server_version = "SandDramaUpload/1.0"

    def log_message(self, fmt, *args):
        # Do not log request headers or form values; upload tokens must never enter logs.
        print(f"{self.client_address[0]} - {fmt % args}", flush=True)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/health":
            json_response(self, 200, {"ok": True})
            return
        if parsed.path.startswith("/uploads/"):
            name = Path(parsed.path.removeprefix("/uploads/")).name
            target = (UPLOAD_DIR / name).resolve()
            if target.parent != UPLOAD_DIR.resolve() or not target.is_file():
                self.send_error(404)
                return
            self.send_response(200)
            self.send_header("Content-Type", mimetypes.guess_type(target.name)[0] or "application/octet-stream")
            self.send_header("Content-Length", str(target.stat().st_size))
            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
            self.end_headers()
            with target.open("rb") as stream:
                while chunk := stream.read(1024 * 1024):
                    self.wfile.write(chunk)
            return
        self.send_error(404)

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path != "/upload":
            self.send_error(404)
            return
        if not secrets.compare_digest(self.headers.get("X-Upload-Token", ""), TOKEN):
            json_response(self, 401, {"message": "invalid upload token"})
            return
        content_length = int(self.headers.get("Content-Length", "0"))
        if content_length <= 0 or content_length > MAX_BYTES:
            json_response(self, 413, {"message": "file too large"})
            return
        content_type = self.headers.get("Content-Type", "")
        match = re.search(r"boundary=([^;]+)", content_type)
        if not match:
            json_response(self, 400, {"message": "multipart/form-data required"})
            return
        body = self.rfile.read(content_length)
        boundary = b"--" + match.group(1).strip().strip('"').encode("utf-8")
        file_data = None
        filename = "upload.bin"
        for part in body.split(boundary):
            if b"Content-Disposition:" not in part:
                continue
            header_end = part.find(b"\r\n\r\n")
            if header_end < 0:
                continue
            headers = part[:header_end].decode("utf-8", "ignore")
            if 'name="file"' not in headers:
                continue
            name_match = re.search(r'filename="([^"]*)"', headers)
            if name_match:
                filename = Path(name_match.group(1)).name
            file_data = part[header_end + 4:]
            if file_data.endswith(b"\r\n"):
                file_data = file_data[:-2]
            break
        if not file_data:
            json_response(self, 400, {"message": "file field is required"})
            return
        suffix = Path(filename).suffix.lower()[:12] or ".bin"
        stored = f"{int(time.time())}-{secrets.token_urlsafe(12)}{suffix}"
        (UPLOAD_DIR / stored).write_bytes(file_data)
        relative = f"/uploads/{stored}"
        json_response(self, 200, {"url": f"{PUBLIC_BASE_URL}{relative}" if PUBLIC_BASE_URL else relative})


if __name__ == "__main__":
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()

// import "./logger";
import "./err";
import "./env";
import express, { Request, Response, NextFunction } from "express";
import { Server } from "socket.io";
import http from "node:http";
import expressWs from "express-ws";
import logger from "morgan";
import cors from "cors";
import buildRoute from "@/core";
import path from "path";
import fs from "fs";
import u from "@/utils";
import socketInit from "@/socket/index";
import { dbReady } from "@/utils/db";
import { authenticateRequest, authenticateStaticRequest, enforceProjectAccess, enforceStaticProjectAccess } from "@/middleware/auth";
import { isEletron } from "@/utils/getPath";
import { ensureThumbnail, ThumbnailSize } from "@/utils/image";

const app = express();
const server = http.createServer(app);

async function checkPermissions() {
  if (!isEletron()) return true;
  const userDataPath = u.getPath();
  try {
    fs.mkdirSync(userDataPath, { recursive: true });
    const testFile = path.join(userDataPath, ".access_test");
    fs.writeFileSync(testFile, "test");
    fs.unlinkSync(testFile);
  } catch (e) {
    const { dialog, app } = require("electron");
    const { response } = await dialog.showMessageBox({
      type: "warning",
      title: "Insufficient permissions",
      message: "The app cannot access the data directory",
      detail: `Cannot read or write the following directory:${userDataPath}Please contact the administrator to grant permissions, or run this program as an administrator.`,
      buttons: ["Confirm exit"],
      defaultId: 0,
    });
    if (response === 0) {
      app.quit();
    }
  }
}

export default async function startServe(randomPort: Boolean = false) {
  await checkPermissions();
  await dbReady;

  await u.writeVersion();
  const io = new Server(server, { cors: { origin: "*" } });
  socketInit(io);

  if (process.env.NODE_ENV == "dev") await buildRoute();

  expressWs(app);

  app.use(logger("dev"));
  app.use(cors({ origin: "*" }));
  app.use(express.json({ limit: "100mb" }));
  app.use(express.urlencoded({ extended: true, limit: "100mb" }));

  // OSS static resources
  const ossDir = u.getPath("oss");
  if (!fs.existsSync(ossDir)) {
    fs.mkdirSync(ossDir, { recursive: true });
  }
  console.log("File directory:", ossDir);
  app.use(
    "/oss",
    authenticateStaticRequest,
    enforceStaticProjectAccess,
    (req, res, next) => {
      // If the parameter `type=small` is passed, return the small image.
      if (req.query.size) {
        const size = req.query.size as string;
        const smallImageBaseDir = path.join(ossDir, "smallImage");
        const originalPath = path.join(ossDir, req.path);

        // Parse the size parameter
        let sizeSubDir: string;
        let sizeOpts: ThumbnailSize | undefined;

        // Check if the format is WIDTHxHEIGHT, e.g., "200x300": proportionally compress to the specified width and height bounds
        const dimensMatch = size.match(/^(\d+)x(\d+)$/i);
        // Determine if the format is a percentage, e.g., "30" or "30%": proportionally scale the original image to the specified percentage.
        const percentMatch = size.match(/^(\d+(?:\.\d+)?)\s*%?$/);

        if (dimensMatch) {
          const w = parseInt(dimensMatch[1], 10);
          const h = parseInt(dimensMatch[2], 10);
          sizeSubDir = `${w}x${h}`;
          sizeOpts = { type: "dimensions", width: w, height: h };
        } else if (percentMatch) {
          const pct = parseFloat(percentMatch[1]);
          sizeSubDir = `${percentMatch[1]}p`;
          sizeOpts = { type: "percentage", value: pct };
        } else {
          // Invalid size parameter; falling back to the original image.
          express.static(ossDir, { acceptRanges: false })(req, res, next);
          return;
        }

        const ext = path.extname(req.path);
        const base = path.basename(req.path, ext);
        const dir = path.dirname(req.path);
        const smallImagePath = path.join(smallImageBaseDir, dir, `${base}_${sizeSubDir}${ext}`);

        ensureThumbnail(originalPath, smallImagePath, sizeOpts).then((thumbnailPath) => {
          if (thumbnailPath) {
            res.sendFile(thumbnailPath);
          } else {
            // Thumbnail generation failed; falling back to the original image.
            express.static(ossDir, { acceptRanges: false })(req, res, next);
          }
        });
        return;
      }
      next();
    },
    express.static(ossDir, { acceptRanges: false }),
  );
  // skills static resources
  const skillsDir = u.getPath("skills");
  if (!fs.existsSync(skillsDir)) {
    fs.mkdirSync(skillsDir, { recursive: true });
  }
  console.log("File directory:", skillsDir);
  // Only allow access to image files
  app.use(
    "/skills",
    (req, res, next) => {
      /\.(jpe?g|png|gif|webp|svg|ico|bmp)$/i.test(req.path) ? next() : res.status(403).end();
    },
    express.static(skillsDir, { acceptRanges: false }),
  );

  // assets static resources
  const assetsDir = u.getPath("assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  console.log("File directory:", assetsDir);
  app.use("/assets", authenticateStaticRequest, enforceStaticProjectAccess, express.static(assetsDir, { acceptRanges: false }));

  // data/web static website
  const webDir = u.getPath("web");
  if (fs.existsSync(webDir)) {
    console.log("Static website directory:", webDir);
    app.use(express.static(webDir, { acceptRanges: false }));
  } else {
    console.warn("Static website directory does not exist:", webDir);
  }

  // Unified API authentication and project ownership validation; the login endpoint is whitelisted in `authenticateRequest`.
  app.use("/api", authenticateRequest, enforceProjectAccess);

  const router = await import("@/router");
  await router.default(app);

  // 404 handling
  app.use((_, res, next: NextFunction) => {
    return res.status(404).send({ message: "API 404 Not Found" });
  });

  // Error handling
  app.use((err: any, _: Request, res: Response, __: NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = err;
    console.error(err);
    res.status(err.status || 500).send(err);
  });

  const envPort = Number(process.env.PORT);
  const port = randomPort ? 0 : (Number.isFinite(envPort) && envPort > 0 ? envPort : 10588);
  return await new Promise((resolve) => {
    server.listen(port, async () => {
      const address = server.address();
      const realPort = typeof address === "string" ? address : address?.port;
      console.log(`[Service started successfully]: http://localhost:${realPort}`);
      resolve(realPort);
    });
  });
}

// Supports closing with await
export function closeServe(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (server) {
      server.close((err?: Error) => {
        if (err) return reject(err);
        console.log("[Service Closed]");
        resolve();
      });
    } else {
      resolve();
    }
  });
}

const isElectron = typeof process.versions?.electron !== "undefined";
if (!isElectron) startServe();

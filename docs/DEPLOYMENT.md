# SandDrama 服务器部署与迁移

本文适用于使用 Docker 部署 SandDrama，并需要让外部 AI 服务访问参考图片、视频或音频的场景。

## 1. 推荐服务器配置

建议使用 x86 ECS，推荐配置如下：

- 4 vCPU / 16 GiB 内存：单独运行 SandDrama、并发较低时的最低稳妥配置。
- 8 vCPU / 32 GiB 内存：与图床、反向代理或其他服务共机时推荐。
- 系统盘：ESSD 40–60 GiB。
- 数据盘：ESSD PL1 200 GiB 起，视频较多时使用 500 GiB 或将媒体迁移到 OSS。
- 公网带宽：至少 10 Mbps，建议 20 Mbps。
- 操作系统：Ubuntu 22.04/24.04 LTS，x86_64。

SandDrama 的图片、视频生成通常调用外部 AI 服务，本机主要负责 Node.js、SQLite、Sharp、文件读写和轻量向量检索，不需要 GPU。只有在本机部署图像或视频模型时才需要 GPU。

## 2. 新服务器准备

安装 Docker 和 Compose 插件，然后开放以下端口：

- `10588/tcp`：SandDrama 网页、API 和静态媒体；如果通过反向代理，也可以只对外开放 80/443。
- `80/tcp`、`443/tcp`：使用域名和 Caddy HTTPS 时开放。

克隆项目：

```bash
git clone https://github.com/cynic-1/sandrama.git
cd sandrama
```

## 3. 配置公网地址

在项目根目录创建未提交的 `.env` 文件。公网 IP 示例：

```dotenv
SANDRAMA_PUBLIC_URL=http://你的公网IP:10588
SANDRAMA_PORT=10588
```

使用域名时建议使用 HTTPS：

```dotenv
SANDRAMA_PUBLIC_URL=https://sandrama.example.com
SANDRAMA_PORT=10588
```

`SANDRAMA_PUBLIC_URL` 必须能被外部 AI 服务直接访问，不能填写 `localhost`、`127.0.0.1` 或 Docker 内部地址。它会被用于生成 `/oss/...`、`/assets/...` 和 `/skills/...` 的绝对 URL。

## 4. 构建并启动

```bash
docker compose up -d --build
docker compose ps
docker compose logs --tail=100 sandrama
```

如果服务器只有 Docker、没有 Compose 插件，也可以手动构建和启动：

```bash
set -a
source .env
set +a
docker build -t sandrama:latest .
docker run -d \
  --name sandrama \
  --restart unless-stopped \
  -e NODE_ENV=prod \
  -e PORT=10588 \
  -e ossURL="$SANDRAMA_PUBLIC_URL" \
  -p "${SANDRAMA_PORT:-10588}:10588" \
  -v "$PWD/data:/app/data" \
  sandrama:latest yarn start
```

访问：

```text
http://你的公网IP:10588/
```

首次创建数据库时，默认管理员账号为：

```text
账号：admin
密码：opensand@2026
```

登录后应立即修改管理员密码。已有 `data/db2.sqlite` 时，程序会继续使用数据库中的账号密码，不会用默认值覆盖已有用户。

## 5. 从旧服务器迁移数据

迁移前先停止旧服务器容器，避免 SQLite 在复制过程中仍有写入：

```bash
docker stop sandrama
```

在新服务器项目目录中执行。下面命令会保留项目资源、SQLite 数据库、生成图片、视频和模型文件：

```bash
rsync -a --info=progress2 old-server:/home/ubuntu/sandrama/data/ ./data/
```

如果不能使用 rsync，也可以使用压缩包：

旧服务器：

```bash
tar -czf sandrama-data-$(date +%Y%m%d).tar.gz data
```

新服务器：

```bash
tar -xzf sandrama-data-*.tar.gz
```

注意：`data/db2.sqlite` 包含账号、供应商 API Key、模型配置和项目数据，不要提交到 Git 或上传到公开位置。迁移完成后再启动：

```bash
docker compose up -d
```

## 6. 配置视频参考图床

部分视频模型要求参考图片/视频是公网 URL。推荐在服务器上运行独立的 Caddy 图床服务，并使用上传 Token。

如果旧服务器已经有 `/home/ubuntu/caddy` 图床目录，直接完整复制到新服务器，然后修改其中的 `.env`：

```dotenv
DOMAIN=http://你的公网IP
UPLOAD_TOKEN=使用openssl rand -hex 32生成的随机值
MAX_UPLOAD_SIZE=10MB
MAX_UPLOAD_BYTES=10485760
```

启动图床：

```bash
cd /home/ubuntu/caddy
docker compose up -d --build
curl http://你的公网IP/health
```

如果使用域名，将 `DOMAIN` 设置为域名并配置 DNS 指向新服务器，Caddy 可以自动申请 HTTPS 证书。

然后在 SandDrama 的“设置 → 供应商配置 → OpenSand 全模态”中填写：

- `请求地址`：OpenSand API 地址。
- `参考图床上传地址`：`http://你的公网IP/upload`，或 HTTPS 域名对应的 `/upload`。
- `参考图床上传Token`：Caddy `.env` 中的 `UPLOAD_TOKEN`。

保存后，视频生成流程会将本地 Base64 参考媒体上传到 Caddy，再把公网 URL 提交给外部模型。Token 只保存在 `data/db2.sqlite`，不要写入仓库或部署文档。

## 7. 部署验证

检查主页：

```bash
curl -I http://你的公网IP:10588/
```

检查图片公网访问：

```bash
curl -I "http://你的公网IP:10588/oss/项目ID/role/文件名.jpg?size=20"
```

预期返回 `HTTP/1.1 200`，且 `Content-Type` 为图片类型。

检查容器：

```bash
docker inspect --format '{{.State.Status}} restart={{.RestartCount}}' sandrama
docker stats --no-stream sandrama
df -h
```

## 8. 常见问题

### 图片 URL 是 localhost

检查 `.env` 中的 `SANDRAMA_PUBLIC_URL`，修改后重新创建容器：

```bash
docker compose up -d --force-recreate
```

### 视频参考素材无法被模型读取

确认以下地址能从公网访问：

```text
http(s)://公网地址/oss/...
http(s)://公网地址/upload
```

同时确认 OpenSand 的上传地址和 Token 已填写，且服务器安全组放通了对应端口。

### 页面或图片越来越卡

先查看：

```bash
docker stats
free -h
df -h
```

如果 Swap 持续增长，优先增加内存；如果磁盘超过 80%，清理旧视频或迁移到 OSS；如果 CPU 长时间接近 100%，升级到 8 vCPU 或把其他服务迁出。

## 9. 更新版本

更新前备份数据：

```bash
cp -a data "../sandrama-data-backup-$(date +%Y%m%d-%H%M%S)"
```

更新并重建：

```bash
git pull --ff-only
docker compose up -d --build
docker compose logs --tail=100 sandrama
```

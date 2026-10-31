import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import db from "@/utils/db";
import { isAdmin } from "@/utils/auth";
import productionAgent from "./routes/productionAgent";
import scriptAgent from "./routes/scriptAgent";

export default (io: Server) => {
  const routes: Record<string, (nsp: ReturnType<Server["of"]>) => void> = {
    productionAgent,
    scriptAgent,
  };

  for (const [name, handler] of Object.entries(routes)) {
    const nsp = io.of(`/api/socket/${name}`);
    nsp.use(async (socket, next) => {
      try {
        const setting = await db("o_setting").where("key", "tokenKey").select("value").first();
        const rawToken = String(socket.handshake.auth?.token ?? "").replace(/^Bearer\s+/i, "");
        const decoded = setting?.value ? (jwt.verify(rawToken, String(setting.value)) as { id?: number; tokenVersion?: number }) : null;
        if (!decoded?.id) return next(new Error("Unauthorized"));
        const user = await db("o_user").where("id", decoded.id).select("id", "role", "disabled", "tokenVersion").first();
        if (!user || Number(user.disabled) === 1 || (decoded.tokenVersion !== undefined && Number(decoded.tokenVersion) !== Number(user.tokenVersion ?? 0))) {
          return next(new Error("Login status has expired"));
        }
        const projectId = Number(socket.handshake.auth?.projectId);
        if (Number.isFinite(projectId) && !isAdmin(user)) {
          const project = await db("o_project").where("id", projectId).select("userId").first();
          if (!project || Number(project.userId ?? 1) !== Number(user.id)) return next(new Error("You do not have permission to access this project"));
        }
        socket.data.user = user;
        return next();
      } catch {
        return next(new Error("Unauthorized"));
      }
    });
    handler(nsp);
    console.log(`[Socket] Registering namespace: /api/socket/${name}`);
  }
};

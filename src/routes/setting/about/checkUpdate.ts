import express from "express";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { z } from "zod";
const router = express.Router();

import fs from "fs";
import path from "path";

declare const __APP_VERSION__: string | undefined;

const APP_VERSION: string = (() => {
  if (typeof __APP_VERSION__ !== "undefined") {
    return __APP_VERSION__;
  }
  // Development environment rollback: Read from package.json
  const pkgPath = path.resolve(process.cwd(), "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  return pkg.version;
})();

export default router.post(
  "/",
  validateFields({
    source: z.enum(["sanddrama", "github", "gitee", "atomgit"]),
    url: z.url().nullable().optional(),
  }),
  async (req, res) => {
    const { source, url } = req.body;

    const getUrl = url ?? "https://sanddrama.oss-cn-beijing.aliyuncs.com/update.json";

    let versionInfo: any;
    try {
      const upstream = await fetch(getUrl);
      const body = await upstream.text();
      if (!upstream.ok) return res.status(502).send(error(`Version service response exception (HTTP${upstream.status}）`));
      try {
        versionInfo = JSON.parse(body);
      } catch {
        return res.status(502).send(error("The version service is temporarily unavailable"));
      }
    } catch {
      return res.status(502).send(error("Unable to connect to the version service"));
    }
    if (!versionInfo) return res.status(502).send(error("Unable to retrieve version information"));
    const { version: tagger, time, data } = versionInfo;

    const sourceData = data[source];
    if (!sourceData) return res.status(400).send(error("Unable to retrieve download information for this source"));

    const platformType: Record<string, string> = {
      win32: "windows",
      darwin: "macos",
      linux: "linux",
    };

    const zipItem = sourceData.find((d: any) => d.type === "zip");
    const installerItem = sourceData.find((d: any) => d.type === platformType[process.platform]);

    const taggerList = tagger.split(".").map(Number);
    const currentVersionList = APP_VERSION.split(".").map(Number);
    // Compare Major
    if (taggerList[0] > currentVersionList[0]) {
      if (!installerItem) return res.status(400).send(error("No installation package is available for the current system from this source"));
      return res
        .status(200)
        .send(success({ needUpdate: true, latestVersion: tagger, reinstall: true, time, url: installerItem.url, version: tagger }));
    }
    // Compare Minor
    if (taggerList[1] > currentVersionList[1]) {
      if (!installerItem) return res.status(400).send(error("No installation package is available for the current system from this source"));
      return res
        .status(200)
        .send(success({ needUpdate: true, latestVersion: tagger, reinstall: true, time, url: installerItem.url, version: tagger }));
    }
    //Patch
    if (taggerList[2] > currentVersionList[2]) {
      if (!zipItem) return res.status(400).send(error("This source has no incremental update package"));
      return res.status(200).send(success({ needUpdate: true, latestVersion: tagger, reinstall: false, time, url: zipItem.url, version: tagger }));
    }
    return res.status(200).send(success({ needUpdate: false, latestVersion: tagger, reinstall: false, time, version: tagger }));
  },
);

import { Request, Response, NextFunction } from "express";
import { z, ZodTypeAny } from "zod";

import { en } from "zod/locales";

z.config(en());

export function validateFields(
  shape: Record<string, ZodTypeAny>,
  source: "body" | "query" | "params" = "body",
) {
  const schema = z.object(shape);

  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[source];
    const parseResult = schema.safeParse(data);
    if (!parseResult.success) {
      const errors = parseResult.error.issues.map((issue) => `Field ${issue.path.join(".")}: ${issue.message}`);
      console.error(errors);
      return res.status(400).json({ message: errors[0] || "Invalid request parameters", errors });
    }
    next();
  };
}

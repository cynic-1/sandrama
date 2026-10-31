import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    images: z.array(z.string()),
  }),
  async (req, res) => {
    const { images } = req.body;
    try {
      const resText = await u.Ai.Text("universalAi").invoke({
        system:
          'Based on the following image data, extract the art style prompt for specifying the style when generating images. The prompt should be concise and artistic. Only the art style prompt is required; no other content is needed. For example: `(Art Style: 2D anime style, 2d animation style)`, `(Art Style: photorealistic human, photorealistic, lifelike, ultra detailed)`, `(Art Style: 3D Chinese animation, Chinese 3D animation style)`, etc. If the image style cannot be described, return `Unable to describe`. For multiple images, output only one comprehensive art style prompt that includes the common style features of all images. The output format must strictly follow the format in the example, must include the two characters `Art style`, and must be enclosed in parentheses. The content within the parentheses must include both Chinese and English art style descriptions, separated by commas. The English part must be translated into idiomatic English prompts.',
        messages: [
          {
            role: "user",
            content: [
              ...images.map((image: string) => ({
                type: "image" as const,
                image,
              })),
            ],
          },
        ],
      });
      res.status(200).send(success(resText.text));
    } catch (e) {
      const err = u.error(e);
      res.status(500).send({ message: err.message });
    }
  },
);

import * as ONNX_WEB from "onnxruntime-web";
import { pipeline, env as transformersEnv, FeatureExtractionPipeline } from "@huggingface/transformers";
import path from "path";
import fs from "fs";
import getPath from "@/utils/getPath";
import db from "@/utils/db";
import userSettings from "@/utils/userSettings";

// ── Model Configuration ──
// const modelOnnxFile = ["all-MiniLM-L6-v2", "onnx", "model_fp16.onnx"]; // Model file path
// const modelDtype = "fp16" as const; // Quantization type: fp32
const extractors = new Map<number, FeatureExtractionPipeline>();

export async function initEmbedding(): Promise<void> {
  const userId = userSettings.currentUserId() ?? 0;
  if (extractors.has(userId)) return;

  const modelConfigData = await userSettings.getSettings(["modelOnnxFile", "modelDtype"]);
  const modelObj: Record<string, string> = {};
  Object.entries(modelConfigData).forEach(([key, value]) => {
    modelObj[key] = value as unknown as string;
  });
  let modelOnnxFile = modelObj?.modelOnnxFile ? JSON.parse(modelObj.modelOnnxFile) : ["all-MiniLM-L6-v2", "onnx", "model_fp16.onnx"]; // Model file path
  let modelDtype = modelObj?.modelDtype ?? ("fp16" as const); // Quantization type: fp32
  const onnxPath = path.join(getPath("models"), ...modelOnnxFile);
  if (!fs.existsSync(onnxPath)) {
    throw new Error(`Embedding model file does not exist:${onnxPath}`);
  }

  transformersEnv.allowRemoteModels = false;
  transformersEnv.allowLocalModels = true;
  transformersEnv.localModelPath = getPath("models").replace(/\\/g, "/") + "/";

  const modelFolder = modelOnnxFile[0];
  // @ts-ignore - pipeline overload union type is too complex
  const extractor = await pipeline("feature-extraction", modelFolder, { dtype: modelDtype });
  extractors.set(userId, extractor);
}

export async function getEmbedding(text: string): Promise<number[]> {
  const userId = userSettings.currentUserId() ?? 0;
  if (!extractors.has(userId)) await initEmbedding();
  const output = await extractors.get(userId)!(text, { pooling: "mean", normalize: true });
  return Array.from(output.data as Float32Array);
}

export function cosineSimilarity(a: number[], b: number[]): number {
  return a.reduce((dot, v, i) => dot + v * b[i], 0);
}

export async function disposeEmbedding(): Promise<void> {
  for (const extractor of extractors.values()) await extractor.dispose?.();
  extractors.clear();
}

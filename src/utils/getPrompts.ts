import { eventExtractionPrompt } from "@/lib/defaultPrompts";

export async function getPrompts(type: string) {
  if (type == "event") return eventExtractionPrompt;
}

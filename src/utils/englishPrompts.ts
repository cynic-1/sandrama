// Translate only an exact known built-in prompt; custom prompts are never changed.
const originalVoicePrompt = `You are a voice matching assistant.
Your task is: Based on the name and description of the given character asset, select the most suitable voice from the candidate audio list.
Matching rules:
1. Prioritize semantic matching based on the character's gender, age, personality, and other characteristics against the voice descriptions;
2. Each character can only be matched with one voice;
3. If there is no suitable voice in the candidate list, do not return an audioId.`;

const englishVoicePrompt = `You are a voice-matching assistant.
Given the name and description of a character asset, select the most suitable voice from the candidate audio list.
Matching rules:
1. Prefer semantic matches between voice descriptions and character traits such as gender, age, and personality.
2. Match no more than one voice to each character.
3. If no candidate is suitable, do not return an audioId.`;

export function englishBuiltinPrompt(type: unknown, value: unknown): unknown {
  return type === "audioBindPrompt" && value === originalVoicePrompt ? englishVoicePrompt : value;
}

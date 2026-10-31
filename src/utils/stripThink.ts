/**
 * Remove the tags and their content from the output of the deep thinking model
 *
 * 1. stripThink(text) — for non-streaming, directly removes the complete  block from the full text
 * 2. createThinkStreamFilter() — Used for streaming, returns a stateful filter that filters chunk by chunk
 */

/**
 * Non-streaming: Remove the from the complete text
 */
export function stripThink(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
}

/**
 * Streaming: Create a stateful chunk filter
 *
 * Usage:
 * ```ts
 * const filter = createThinkStreamFilter();
 * for await (const chunk of textStream) {
 *   const filtered = filter.push(chunk);
 *   if (filtered) msg.send(filtered);
 * }
 * ```
 */
export function createThinkStreamFilter() {
  let insideThink = false;
  let buffer = "";

  return {
    /**
     * Input a chunk and return the filtered text that needs to be output (which may be an empty string).
     */
    push(chunk: string): string {
      let output = "";
      let i = 0;

      while (i < chunk.length) {
        if (insideThink) {
          // Inside the <think>, looking for
          const closeIdx = chunk.indexOf("</think>", i);
          if (closeIdx !== -1) {
            // Find the closing tag and skip the tag content
            insideThink = false;
            i = closeIdx + "</think>".length;
          } else {
            // The entire remaining chunk is within think, discard all
            break;
          }
        } else {
          // Not inside the <think>
          const openIdx = chunk.indexOf("<think>", i);
          if (openIdx !== -1) {
            // Find the opening tag and output the content before the tag
            output += buffer + chunk.slice(i, openIdx);
            buffer = "";
            insideThink = true;
            i = openIdx + "<think>".length;
          } else {
            // No <think> found, but the end of the chunk may be an incomplete "<thi..."
            // The end of the buffer may contain an incomplete tag fragment starting with "<"
            const potentialStart = findPartialTag(chunk, i);
            if (potentialStart !== -1) {
              output += buffer + chunk.slice(i, potentialStart);
              buffer = chunk.slice(potentialStart);
            } else {
              output += buffer + chunk.slice(i);
              buffer = "";
            }
            break;
          }
        }
      }

      return output;
    },

    /**
     * Called when the stream ends, flushing any remaining content in the buffer
     */
    flush(): string {
      const remaining = buffer;
      buffer = "";
      return remaining;
    },
  };
}

/**
 * Check whether the end of chunk[startIdx..] contains an incomplete prefix of "
 * "<", "<t", "<th", "<thi", "<thin", "<think"
 * Returns the starting position of the incomplete prefix, or -1 if not found
 */
function findPartialTag(chunk: string, startIdx: number): number {
  const tag = "<think>";
  // Only check up to tag.length - 1 characters at the end
  const searchStart = Math.max(startIdx, chunk.length - (tag.length - 1));
  for (let i = searchStart; i < chunk.length; i++) {
    const remaining = chunk.slice(i);
    if (tag.startsWith(remaining)) {
      return i;
    }
  }
  return -1;
}

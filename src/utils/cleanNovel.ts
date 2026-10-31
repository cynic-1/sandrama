import { EventEmitter } from "events";
import { o_novel } from "@/types/database";
import u from "@/utils";
import { stripThink } from "@/utils/stripThink";
export interface EventType {
  id: number;
  event: string;
}

/*  Text data cleaning
 * @param textData The text that needs to be cleaned
 * @param windowSize Number of items per group, default 5
 * @param overlap Number of overlaps, default 1
 * @returns {totalCharacter:all character cards,totalEvent:all events}
 */

class CleanNovel {
  emitter: EventEmitter;
  /** Maximum concurrency*/
  concurrency: number;

  constructor(concurrency: number = 5) {
    this.emitter = new EventEmitter();
    this.concurrency = concurrency;
  }

  private async processChapter(novel: o_novel): Promise<EventType | null> {
    try {
      const prompt = await u.getPrompts("event");
      const promptData = await u.userSettings.getPromptByType("eventExtraction");
      let eventExtraction = "" as string | undefined;
      if (promptData && promptData.useData) {
        eventExtraction = promptData.useData;
      } else {
        eventExtraction = promptData?.data ?? undefined;
      }
      const resData = await u.Ai.Text("universalAi").invoke({
        system: eventExtraction ? JSON.stringify(eventExtraction) : (prompt as string),
        messages: [
          {
            role: "user",
            content:
              "Please provide the following novel chapter numbers:" +
              novel.chapterIndex +
              "Novel chapter coupon:" +
              novel.reel +
              "Novel chapter title:" +
              novel.chapter +
              "Novel chapter content generation event summary:" +
              novel.chapterData!,
          },
        ],
      });
      const preData = stripThink(resData.text);
      this.emitter.emit("item", { id: novel.id, event: preData });
      return { id: novel.id!, event: preData };
    } catch (e) {
      this.emitter.emit("item", { id: novel.id, event: null, errorReason: u.error(e).message });
      return null;
    }
  }

  async start(allChapters: o_novel[], projectId: number): Promise<EventType[]> {
    const totalEvent: EventType[] = [];

    // Concurrency control: Limit the number of tasks running simultaneously using semaphores
    let running = 0;
    let index = 0;
    const results: Promise<void>[] = [];

    const runNext = (): Promise<void> => {
      if (index >= allChapters.length) return Promise.resolve();
      const novel = allChapters[index++];
      running++;

      return this.processChapter(novel).then((result) => {
        if (result) totalEvent.push(result);
        running--;
        return runNext();
      });
    };

    // Start up to {concurrency} concurrent tasks
    const workers = Array.from({ length: Math.min(this.concurrency, allChapters.length) }, () => runNext());

    await Promise.all(workers);

    return totalEvent;
  }
}

export default CleanNovel;

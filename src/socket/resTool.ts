import u from "@/utils";
import { Socket } from "socket.io";
import type {
  ChatMessageStatus,
  AIMessageContent,
  TextContent,
  MarkdownContent,
  ImageContent,
  ThinkingContent,
  SearchContent,
  SuggestionContent,
  ToolCallContent,
  ActivityContent,
  ReasoningContent,
} from "./chatMessagesData";

type ContentType = AIMessageContent["type"];

class ResTool {
  public socket: Socket;
  public data: Record<string, any>;

  constructor(socket: Socket, data: Record<string, any> = {}) {
    this.socket = socket;
    this.data = data;
  }

  // Create a new message
  newMessage(role: "assistant" | "user" | "system" = "assistant", name?: string) {
    const messageId = u.uuid();
    const datetime = new Date().toISOString();

    this.socket.emit("message", {
      id: messageId,
      role,
      name,
      status: "pending" as ChatMessageStatus,
      datetime,
      content: [],
    });

    return new MessageBuilder(this.socket, messageId, role, name, datetime);
  }

  // Send an error message
  sendError(messageId: string, error: string) {
    this.socket.emit("message:update", {
      id: messageId,
      status: "error" as ChatMessageStatus,
      ext: { error },
    });
  }

  // Send completion status
  sendComplete(messageId: string) {
    this.socket.emit("message:update", {
      id: messageId,
      status: "complete" as ChatMessageStatus,
    });
  }
}

// Message Builder
class MessageBuilder {
  private socket: Socket;
  private messageId: string;
  private messageRole: "assistant" | "user" | "system";
  private messageName?: string;
  private messageDatetime: string;

  constructor(socket: Socket, messageId: string, role: "assistant" | "user" | "system", name?: string, datetime?: string) {
    this.socket = socket;
    this.messageId = messageId;
    this.messageRole = role;
    this.messageName = name;
    this.messageDatetime = datetime ?? new Date().toISOString();
  }

  get id() {
    return this.messageId;
  }

  get role() {
    return this.messageRole;
  }

  get name() {
    return this.messageName;
  }

  get datetime() {
    return this.messageDatetime;
  }

  // Update message status
  updateStatus(status: ChatMessageStatus) {
    this.socket.emit("message:update", {
      id: this.messageId,
      status,
    });
    return this;
  }

  // Add text content
  text(initialText = "") {
    const contentId = u.uuid();
    const content: TextContent = {
      type: "text",
      id: contentId,
      data: "",
      status: "pending",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    const stream = new AutoThinkingTextStream(this.socket, this.messageId, contentId, this);
    if (initialText) {
      stream.append(initialText);
    }
    return stream;
  }

  // Add Markdown content
  markdown(initialText = "") {
    const contentId = u.uuid();
    const content: MarkdownContent = {
      type: "markdown",
      id: contentId,
      data: initialText,
      status: "pending",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    return new ContentStream<string>(this.socket, this.messageId, contentId, "markdown");
  }

  // Add thinking content
  thinking(title = "Thinking...") {
    const contentId = u.uuid();
    const content: ThinkingContent = {
      type: "thinking",
      id: contentId,
      data: { title, text: "" },
      status: "pending",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    return new ThinkingStream(this.socket, this.messageId, contentId);
  }

  // Add search content
  search(title = "Searching...") {
    const contentId = u.uuid();
    const content: SearchContent = {
      type: "search",
      id: contentId,
      data: { title, references: [] },
      status: "pending",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    return new SearchStream(this.socket, this.messageId, contentId);
  }

  // Add image content
  image(data: ImageContent["data"]) {
    const contentId = u.uuid();
    const content: ImageContent = {
      type: "image",
      id: contentId,
      data,
      status: "complete",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    return this;
  }

  // Add suggested content
  suggestion(suggestions: SuggestionContent["data"]) {
    const contentId = u.uuid();
    const content: SuggestionContent = {
      type: "suggestion",
      id: contentId,
      data: suggestions,
      status: "complete",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    return this;
  }

  // Add tool call content
  toolCall(data: ToolCallContent["data"]) {
    const contentId = u.uuid();
    const content: ToolCallContent = {
      type: "toolcall",
      id: contentId,
      data: { ...data, parentMessageId: this.messageId },
      status: "pending",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    return new ToolCallStream(this.socket, this.messageId, contentId, data.toolCallId);
  }

  // Add activity content
  activity<T = Record<string, any>>(activityType: string, content: T) {
    const contentId = u.uuid();
    const activityContent: ActivityContent<T> = {
      type: "activity",
      id: contentId,
      data: {
        activityType,
        messageId: this.messageId,
        content,
      },
      status: "complete",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content: activityContent,
    });

    return this;
  }

  // Add reasoning content
  reasoning() {
    const contentId = u.uuid();
    const content: ReasoningContent = {
      type: "reasoning",
      id: contentId,
      data: [],
      status: "pending",
    };

    this.socket.emit("content:add", {
      messageId: this.messageId,
      content,
    });

    return new ReasoningBuilder(this.socket, this.messageId, contentId);
  }

  // Complete the message
  complete() {
    this.socket.emit("message:update", {
      id: this.messageId,
      status: "complete" as ChatMessageStatus,
    });
  }

  // Stop message
  stop() {
    this.socket.emit("message:update", {
      id: this.messageId,
      status: "stop" as ChatMessageStatus,
    });
  }

  // Error
  error(errorMsg?: string) {
    this.socket.emit("message:update", {
      id: this.messageId,
      status: "error" as ChatMessageStatus,
      ext: errorMsg ? { error: errorMsg } : undefined,
    });
  }
}

// Content stream base class
class ContentStream<T> {
  protected socket: Socket;
  protected messageId: string;
  protected contentId: string;
  protected contentType: ContentType;

  constructor(socket: Socket, messageId: string, contentId: string, contentType: ContentType) {
    this.socket = socket;
    this.messageId = messageId;
    this.contentId = contentId;
    this.contentType = contentType;
  }

  get id() {
    return this.contentId;
  }

  // Stream append data
  append(chunk: string) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: this.contentType,
      data: chunk,
      strategy: "append",
      status: "streaming",
    });
    return this;
  }

  // Merge/Replace Data
  merge(data: T) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: this.contentType,
      data,
      strategy: "merge",
      status: "streaming",
    });
    return this;
  }

  // Complete the content
  complete(finalData?: T) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: this.contentType,
      data: finalData,
      status: "complete",
    });
    return this;
  }

  // Error
  error() {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      status: "error",
    });
    return this;
  }
}

// Thinking content stream
class ThinkingStream extends ContentStream<ThinkingContent["data"]> {
  constructor(socket: Socket, messageId: string, contentId: string) {
    super(socket, messageId, contentId, "thinking");
  }

  // Append thinking text
  appendText(chunk: string) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "thinking",
      data: { text: chunk },
      strategy: "append",
      status: "streaming",
    });
    return this;
  }

  // Update the title
  updateTitle(title: string) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "thinking",
      data: { title },
      strategy: "merge",
      status: "streaming",
    });
    return this;
  }
}

// Text content stream: Automatically convert into thinking content
class AutoThinkingTextStream extends ContentStream<string> {
  private static readonly OPEN_TAG = "<think>";
  private static readonly CLOSE_TAG = "</think>";

  private readonly messageBuilder: MessageBuilder;
  private pending = "";
  private inThinking = false;
  private thinkingStream: ThinkingStream | null = null;
  private thinkingBuffer = "";
  private thinkingStartTime: number = 0;

  constructor(socket: Socket, messageId: string, contentId: string, messageBuilder: MessageBuilder) {
    super(socket, messageId, contentId, "text");
    this.messageBuilder = messageBuilder;
  }

  /**
   * Check whether the tail of str is a non-empty proper prefix of tag.
   * Returns the number of trailing characters to retain (0 indicates no buffering is needed).
   */
  private static tailPrefixLen(str: string, tag: string): number {
    const maxCheck = Math.min(str.length, tag.length - 1);
    for (let len = maxCheck; len >= 1; len--) {
      if (str.endsWith(tag.slice(0, len))) {
        return len;
      }
    }
    return 0;
  }

  override append(chunk: string) {
    if (!chunk) return this;

    let rest = this.pending + chunk;
    this.pending = "";

    while (rest.length > 0) {
      if (!this.inThinking) {
        // Find the start tag of the think block
        const openIndex = rest.indexOf(AutoThinkingTextStream.OPEN_TAG);
        if (openIndex >= 0) {
          this.flushText(rest.slice(0, openIndex));
          this.inThinking = true;
          this.thinkingStartTime = Date.now();
          this.thinkingBuffer = "";
          this.ensureThinkingStream();
          rest = rest.slice(openIndex + AutoThinkingTextStream.OPEN_TAG.length);
          continue;
        }

        // Check whether the tail could be a partial prefix of a tag
        const keep = AutoThinkingTextStream.tailPrefixLen(rest, AutoThinkingTextStream.OPEN_TAG);
        if (keep > 0) {
          this.flushText(rest.slice(0, rest.length - keep));
          this.pending = rest.slice(rest.length - keep);
        } else {
          this.flushText(rest);
        }
        break;
      } else {
        // Find the </think> closing tag
        const closeIndex = rest.indexOf(AutoThinkingTextStream.CLOSE_TAG);
        if (closeIndex >= 0) {
          this.flushThinking(rest.slice(0, closeIndex));
          this.finishThinking();
          rest = rest.slice(closeIndex + AutoThinkingTextStream.CLOSE_TAG.length);
          continue;
        }

        // Check whether the tail could be a partial prefix of a tag
        const keep = AutoThinkingTextStream.tailPrefixLen(rest, AutoThinkingTextStream.CLOSE_TAG);
        if (keep > 0) {
          this.flushThinking(rest.slice(0, rest.length - keep));
          this.pending = rest.slice(rest.length - keep);
        } else {
          this.flushThinking(rest);
        }
        break;
      }
    }

    return this;
  }

  override complete(finalData?: string) {
    if (finalData) {
      this.append(finalData);
    }

    if (this.pending) {
      if (this.inThinking) {
        this.flushThinking(this.pending);
      } else {
        this.flushText(this.pending);
      }
      this.pending = "";
    }

    this.finishThinking();
    super.complete();
    return this;
  }

  override error() {
    if (this.thinkingStream) {
      this.thinkingStream.error();
      this.thinkingStream = null;
    }
    this.pending = "";
    this.thinkingBuffer = "";
    this.inThinking = false;
    return super.error();
  }

  /** Output plain text*/
  private flushText(text: string) {
    if (!text) return;
    super.append(text);
  }

  /** Output thinking text: accumulate the complete content, send it using the merge strategy, and avoid losing content due to frontend append*/
  private flushThinking(text: string) {
    if (!text) return;
    this.thinkingBuffer += text;
    this.ensureThinkingStream().merge({ title: "Thinking...", text: this.thinkingBuffer });
  }

  private ensureThinkingStream() {
    if (!this.thinkingStream) {
      this.thinkingStartTime = Date.now();
      this.thinkingStream = this.messageBuilder.thinking("Thinking...");
    }
    return this.thinkingStream;
  }

  private finishThinking() {
    if (this.thinkingStream) {
      const elapsed = ((Date.now() - this.thinkingStartTime) / 1000).toFixed(1);
      this.thinkingStream.updateTitle(`Thinking complete (${elapsed}seconds)`);
      this.thinkingStream.complete({ title: `Thinking complete (${elapsed}seconds)`, text: this.thinkingBuffer });
      this.thinkingStream = null;
      this.thinkingBuffer = "";
    }
    this.inThinking = false;
  }
}

// Search content stream
class SearchStream extends ContentStream<SearchContent["data"]> {
  constructor(socket: Socket, messageId: string, contentId: string) {
    super(socket, messageId, contentId, "search");
  }

  // Add a citation
  addReference(ref: Exclude<SearchContent["data"]["references"], undefined>[0]) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "search",
      data: { references: [ref] },
      strategy: "append",
      status: "streaming",
    });
    return this;
  }

  // Batch add references
  addReferences(refs: SearchContent["data"]["references"]) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "search",
      data: { references: refs },
      strategy: "append",
      status: "streaming",
    });
    return this;
  }

  // Update the title
  updateTitle(title: string) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "search",
      data: { title },
      strategy: "merge",
      status: "streaming",
    });
    return this;
  }
}

// Tool call flow
class ToolCallStream extends ContentStream<ToolCallContent["data"]> {
  private toolCallId: string;

  constructor(socket: Socket, messageId: string, contentId: string, toolCallId: string) {
    super(socket, messageId, contentId, "toolcall");
    this.toolCallId = toolCallId;
  }

  // Append parameter block
  appendArgs(chunk: string) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "toolcall",
      data: { toolCallId: this.toolCallId, args: chunk },
      strategy: "append",
      status: "streaming",
    });
    return this;
  }

  // Append result block
  appendResult(chunk: string) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "toolcall",
      data: { toolCallId: this.toolCallId, chunk },
      strategy: "append",
      status: "streaming",
    });
    return this;
  }

  // Set complete results
  setResult(result: string) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "toolcall",
      data: { toolCallId: this.toolCallId, result },
      strategy: "merge",
      status: "complete",
    });
    return this;
  }

  // Update event type
  updateEventType(eventType: ToolCallContent["data"]["eventType"]) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "toolcall",
      data: { toolCallId: this.toolCallId, eventType },
      strategy: "merge",
      status: "streaming",
    });
    return this;
  }
}

// Reasoning Builder
class ReasoningBuilder {
  private socket: Socket;
  private messageId: string;
  private contentId: string;

  constructor(socket: Socket, messageId: string, contentId: string) {
    this.socket = socket;
    this.messageId = messageId;
    this.contentId = contentId;
  }

  // Add sub-content
  addContent(content: AIMessageContent) {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "reasoning",
      data: [content],
      strategy: "append",
      status: "streaming",
    });
    return this;
  }

  // Complete the reasoning
  complete() {
    this.socket.emit("content:update", {
      messageId: this.messageId,
      contentId: this.contentId,
      type: "reasoning",
      status: "complete",
    });
    return this;
  }
}

export default ResTool;
export { MessageBuilder, ContentStream, ThinkingStream, SearchStream, ToolCallStream, ReasoningBuilder };

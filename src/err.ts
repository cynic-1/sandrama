import { serializeError } from "serialize-error";

// Handling unhandled Promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("[Unhandled Promise rejection]");
  if (reason instanceof Error) {
    console.error("Error name:", reason.name);
    console.error("Error message:", reason.message);
    console.error("Stack information:", reason.stack);
    console.error("Serialization details:", JSON.stringify(serializeError(reason), null, 2));
  } else {
    console.error("Cause:", reason);
    console.error("Type:", typeof reason);
    try {
      console.error("JSON:", JSON.stringify(reason, null, 2));
    } catch {
      console.error("(Unable to serialize)");
    }
  }
  console.error("Promise:", promise);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("[Uncaught Exception]");
  console.error("Error name:", error.name);
  console.error("Error message:", error.message);
  console.error("Stack information:", error.stack);
  console.error("Serialization details:", JSON.stringify(serializeError(error), null, 2));
});

// Determine whether it is a packaged Electron environment
const isElectron = typeof process.versions?.electron !== "undefined";
let isPackaged = false;
if (isElectron) {
  const { app } = require("electron");
  isPackaged = app.isPackaged;
}

// Load environment variables (the packaged environment defaults to using prod)
const env = process.env.NODE_ENV;
if (!env) {
  if (isElectron) process.env.NODE_ENV = "prod";
  else process.env.NODE_ENV = "dev";
  console.log(`[Environment variables:${process.env.NODE_ENV}]`);
}

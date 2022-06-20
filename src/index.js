import * as timer from "./timer";

try {
  if (process.env.NODE_ENV.startsWith("development"))
    console.log("Starting development environment");
  else console.log("Starting production environment");

  timer.exec();
} catch (e) {
  console.log("Failed to start.");
  throw new Error(e);
}

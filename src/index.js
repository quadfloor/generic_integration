import { sqlConfig } from "./access/mssql";

import * as timer from "./timer";

try {
  // Set MS SQL configuration
  sqlConfig.set({
    server: "192.168.62.134",
    authentication: {
      type: "default",
      options: {
        userName: "Administrator",
        password: "QuadSenha123!",
      },
    },
    options: {
      port: 1433, // Default Port
      trustServerCertificate: true,
    },
  });

  if (process.env.NODE_ENV.startsWith("development"))
    console.log("Starting development environment");
  else console.log("Starting production environment");

  timer.exec();
} catch (e) {
  console.log("Failed to start.");
  throw new Error(e);
}

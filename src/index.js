 import express from "express";
 import bodyParser from "body-parser";
 import morgan from "morgan";
 
 import * as timer from "./timer";
 
 // set up example server
 const app = express();
 app.set("port", process.env.API_PORT || 3001);
 
 // Do not expose any software information to potential hackers
 app.disable("x-powered-by");
 
if (process.env.NODE_ENV.startsWith("development"))
   console.log("Starting development environment");
 else console.log("Starting production environment");
 
 app.listen(app.get("port"), () => {
   console.log(`Generic ERP connector running...`); // eslint-disable-line no-console
 });
 
 timer.exec();
 

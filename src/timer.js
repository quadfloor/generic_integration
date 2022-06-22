import { sqlSelect } from "./access/mssql";

const DEBUG = true;

const checkInterval = async () => {
  try {
    if (DEBUG) console.log("DEBUG (checkInterval): Timer function");

    if (DEBUG) console.log("DEBUG (checkInterval): Will select from origin table");
    let result = await sqlSelect("TEST", ["F1", "F2"], "A > 0", 1);

    console.log(result);
    if (DEBUG) console.log("DEBUG (checkInterval): Got records. Will write to Quadfloor.");

  } catch (e) {
    console.log("ERROR (checkInterval):");
    throw new Error(e);
  }
};

export const exec = () => {
  if (DEBUG) console.log("DEBUG (exec): Will start timer");
checkInterval();
//  setInterval(checkInterval, 1000);
};

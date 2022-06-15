import {
    sqlFind
  } from "./access/sql.js";
  
  import moment from "moment";
  
  const checkInterval = () => {
    let now = Math.floor(Date.now() / 1000);
    console.log("(KPI) End of the day", new Date(now));
  };

  export const exec = () => {
    setInterval(checkInterval, 1000);
  };
  
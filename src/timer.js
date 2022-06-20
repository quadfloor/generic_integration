import { sqlConnect } from "./access/mssql/sql.js";

const checkInterval = async () => {
  try {
    let config = {
      server: "192.168.1.212",
      authentication: {
        type: "default",
        options: {
          userName: "test",
          password: "test",
        },
      },
      options: {
        port: 1433, // Default Port
      },
    };

    let result = await sqlConnect(config);

    if (result) console.log("MSSQL Connection succeeded.");
  } catch (e) {
    console.log("Connection fail.");
    throw new Error(e);
  }
};

export const exec = () => {
  setInterval(checkInterval, 1000);
};

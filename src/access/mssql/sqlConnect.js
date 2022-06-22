import { Connection, Request } from "tedious";

import { sqlConfig } from ".";

const DEBUG = true;

let connection = null;

const sqlConnect = async () => {
  let config = sqlConfig.get();

  if (DEBUG) {
    console.log("DEBUG sqlConnect(): configuration");
    console.log(config);
  }

  if (!config)
    throw new Error("ERROR: sqlConnect(): No database configuration.");

  console.log("Will connect");

  let p = () => {
    return new Promise((resolve, reject) => {
      let conn = new Connection(config);

      conn.connect();

      conn.on("end", () => {
        conn.close();
      });

      conn.on("connect", (err) => {
        if (err) return reject(err);
        resolve(conn);
      });

      connection.on("error", (err) => {
        let msg =
          "ERROR: sqlConnect: Error connecting to SQL Server database. Error: " +
          err;
        console.log(msg);
        throw new Error(msg);

        connection = null;
      });
    });
  };

  let connection = await p();
  console.log("Connected");
  console.log(connection);
  /*

   connection.on("connect", (err) => {
      if (err) throw new Error(err);

      connection = conn;
    });

    connection.on('error', , (err) => {
      console.log(
        "sqlConnect ERROR: Error connecting to SQL Server database. Configuration:"
      );
      console.log(config);

      if (err) throw new Error(err);

      connection = null;
    });

    connection.on('end', , () => {
      if (DEBUG) console.log("Connection end");
      connection.close();
      connection = null;
    });
*/
  return connection;
};

export default sqlConnect;

import { Connection, Request } from "tedious";

const DEBUG = true;

let connection = null;

const sqlConnect = async (config) => {
  if (DEBUG) {
    console.log("DEBUG sqlConnect()");
    console.log(config);
  }

  try {
    if (connection) {
      console.log("Connection exists.");
      console.log(connection);
      return connection;
    }

    var config = {
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
        trustServerCertificate: true,
      },
    };

    let conn = new Connection(config);

    console.log("Will connect");

    let kkk = await conn.connect();
    console.log("Connected");
    console.log(kkk);
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
  } catch (e) {
    console.log("(sqlConnect) ERROR: " + e.message);
    throw e;
  }
};

export default sqlConnect;

import sqlConnect from "./sqlConnect";

const DEBUG = true;

const sqlSelect = async (table, fields, where, sort, limit) => {
  if (DEBUG) {
    console.log("DEBUG sqlSelect()");
    console.log("table: " + table);
    console.log("fields:");
    console.log(fields);
    console.log("where:");
    console.log(where);
    console.log("sort:");
    console.log(sort);
    console.log("limit:");
    console.log(limit);
  }

  try {
    let conn = await sqlConnect();

    let str = "SELECT ";
    str += fields.join(",");

    if (where) str += " WHERE " + where;

    if (sort) str += " SORT " + sort;

    if (limit) str += " LIMIT " + limit;

    if (DEBUG) console.log("DEBUG (sqlSelect): " + str);

    sqlInvoke(str);
  } catch (e) {
    console.log("ERROR (sqlSelect): " + e.message);
    throw e;
  }
};

export default sqlSelect;

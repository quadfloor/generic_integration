const DEBUG = true;

const sqlSelect = async (context, collection, query, fields, sort, limit) => {
  if (DEBUG) {
    console.log("================= START DEBUG BLOCK ================");
    console.log("DEBUG sqlSelect()");
    console.log("context: " + (context ? context.company._id : context));
    console.log("collection: " + collection);
    console.log("query:");
    console.log(query);
    console.log("fields:");
    console.log(fields);
    console.log("sort:");
    console.log(sort);
    console.log("limit:");
    console.log(limit);
  }

  try {
    console.log("sqlSelect");
  } catch (e) {
    console.log("(sqlSelect) ERROR: " + e.message);
    throw e;
  }
};

export default sqlSelect;

const { Pool } = require("pg");

const PG_URI =
  "postgres://oozijbuk:ZNcofjm_mcX4Nz4QuAmwN3shxBNoyekP@castor.db.elephantsql.com/oozijbuk";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

const { Pool } = require("pg");

const PG_URI = "postgres://qngnwmxb:YHi173Z0V05UWQYKYRdoI8kLEobEdRDc@castor.db.elephantsql.com/qngnwmxb";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

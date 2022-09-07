// sql/connection.js file

const mysql = require("mysql");
require("dotenv").config();

const { USERNAME, PASSWORD, HOST } = process.env;
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection pool...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: HOST,
        user: USERNAME,
        password: PASSWORD,
        database: "test",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;

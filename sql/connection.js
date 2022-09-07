// sql/connection.js file

const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection pool...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "database-1.cip7qianpbmz.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "password",
        database: "test",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;

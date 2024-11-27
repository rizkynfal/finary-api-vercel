const pg = require("pg");
const error = require("../utils/error");
require("dotenv").config();

class DB {
  constructor() {
    this.db = this.connectToDB();
  }
  connectToDB() {
    const pgConfig = {
      user: process.env.POSTGRE_USER,
      host: process.env.POSTGRE_HOST,
      database: process.env.POSTGRE_DATABASE,
      password: process.env.POSTGRE_PASSWORD,
      port: process.env.POSTGRE_PORT,
    };

    return new Promise((resolve, reject) => {
      new pg.Pool(pgConfig).connect((err, client, done) => {
        if (err) {
          return reject(err);
        }
        done();
        return resolve(client);
      });
    });
  }
  async getConnDB() {
    try {
      const database = this.db;
      return database;
    } catch (err) {
      throw new error.ServerError(err);
    }
  }
  async query(sql, tenant) {
    const db = await this.connectToDB(tenant);
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          return reject(err);
        }
        const rows = result.rows;
        return resolve(rows);
      });
    });
  }
}
exports.DB = DB;

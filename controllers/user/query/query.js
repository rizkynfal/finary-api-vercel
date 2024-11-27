const { DB } = require("../../../database/conn");
const db = new DB();

async function getAllUsers() {
  const query = `SELECT * FROM users`;
  const result = await db.query(query);
  return result;
}
async function getUserByUsername(username) {
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  const result = await db.query(query);
  return result;
}
module.exports = { getAllUsers, getUserByUsername };

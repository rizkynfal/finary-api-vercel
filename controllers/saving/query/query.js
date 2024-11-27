const { DB } = require("../../../database/conn");
const db = new DB();
async function getSavingByUsername(username) {
  const query = `SELECT * FROM saveyourfuture WHERE username = '${username}'`;
  const result = await db.query(query);
  return result;
}

module.exports = { getSavingByUsername };

const { DB } = require("../../../database/conn");
const db = new DB();
async function getCatatanByUsername(username) {
  const query = `SELECT * FROM catatan WHERE username = '${username}'`;
  const result = await db.query(query);
  return result;
}
module.exports = { getCatatanByUsername };

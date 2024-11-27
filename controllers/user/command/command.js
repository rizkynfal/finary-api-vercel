const { DB } = require("../../../database/conn");
const db = new DB();
async function createUser(data) {
  const query = `INSERT INTO users (name, username, password, tanggal_lahir) VALUES ('${data.name}', '${data.username}', '${data.password}', '${data.tanggal_lahir}' RETURNING *`;
  const result = await db.query(query);
  return result;
}
module.exports = { createUser };

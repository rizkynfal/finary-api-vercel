const { DB } = require("../../../database/conn");
const db = new DB();
async function insertCatatan(data) {
  const query = `INSERT INTO catatan (username, tanggal, kategori_catatan, kategori,jumlah_uang,keterangan) VALUES ('${data.username}', '${data.tanggal}', ${data.kategori_catatan}, '${data.kategori}', '${data.jumlah_uang}', '${data.keterangan}') RETURNING *`;
  const result = await db.query(query);
  return result;
}
module.exports = { insertCatatan };

const error = require("../../../utils/error");
const command = require("./command");
const wrapper = require("../../../utils/wrapper");

class CommandHandler {
  async insertCatatan(payload) {
    try {
      const data = {
        username: payload.username,
        tanggal: payload.tanggal,
        kategori_catatan: parseInt(payload.kategori_catatan),
        kategori: payload.kategori,
        jumlah_uang: payload.jumlah_uang,
        keterangan: payload.keterangan,
      };
      const result = await command.insertCatatan(data);

      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(new error.ServerError(err));
    }
  }
}

module.exports = new CommandHandler();

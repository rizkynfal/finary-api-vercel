const command = require("./command");
const wrapper = require("../../../utils/wrapper");
const error = require("../../../utils/error");
const constant = require("../../../utils/constant");
const utils = require("../../../utils/util");
class CommandHandler {
  async createUser(payload) {
    try {
      const { nama, username, tanggal_lahir, password } = payload;
      const checkUser = await utils.checkUser(username);
      if (checkUser.length > 0) {
        return wrapper.error(
          new error.BadRequestError(constant.FAILED_MESSAGE.USERNAME_EXISTS)
        );
      }
      const hashedPassword = await converter.hashPassword(password);
      const data = {
        username,
        password: hashedPassword,
        nama,
        tanggal_lahir,
      };
      const result = await command.createUser(data);
      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(new error.ServerError(err));
    }
  }
}
module.exports = new CommandHandler();

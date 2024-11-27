const command = require("./command");
const wrapper = require("../../../utils/wrapper");
const error = require("../../../utils/error");

class CommandHandler {
  async insertSaving(data) {
    try {
      const result = await command.insertSaving(data);
      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(new error.ServerError(err));
    }
  }
}

module.exports = new CommandHandler();

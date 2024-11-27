const query = require("./query");
const wrapper = require("../../../utils/wrapper");
const error = require("../../../utils/error");
class QueryHandler {
  async getAllUsers() {
    try {
      const result = await query.getAllUsers();
      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(new error.ServerError(err));
    }
  }
  async getUserByUsername(params) {
    const { username } = params;
    try {
      const result = await query.getUserByUsername(username);
      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(new error.ServerError(err));
    }
  }
}
module.exports = new QueryHandler();

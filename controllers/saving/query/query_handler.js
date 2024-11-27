const error = require("../../../utils/error");
const query = require("../../saving/query/query");
const wrapper = require("../../../utils/wrapper");
class QueryHandler {
  async getSavingByUsername(params) {
    const { username } = params;
    try {
      const result = await query.getSavingByUsername(username);
      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(new error.ServerError(err));
    }
  }
}
module.exports = new QueryHandler();

const query = require("./query");
const wrapper = require("../../../utils/wrapper");
const error = require("../../../utils/error");
const constants = require("../../../utils/constant");
class QueryHandler {
  async getCatatanByUsername(params) {
    const { username } = params;
    try {
      const result = await query.getCatatanByUsername(username);
      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(
        new error.ServerError(constants.FAILED_MESSAGE.CATATAN_FAILED)
      );
    }
  }
}
module.exports = new QueryHandler();

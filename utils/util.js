const userQuery = require("../controllers/user/query/query");
const wrapper = require("../utils/wrapper");
const error = require("./error");
async function checkUser(params) {
  try {
    const result = await userQuery.getUserByUsername(params);
    if (result.length < 1) {
      return wrapper.error(
        new error.BadRequestError(
          constant.FAILED_MESSAGE.USERNAME_OR_PASSWORD_NOT_VALID
        )
      );
    }
    return result;
  } catch (err) {
    wrapper.error(err);
  }
}
module.exports = { checkUser };

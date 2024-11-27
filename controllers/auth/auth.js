const wrapper = require("../../utils/wrapper");
const error = require("../../utils/error");
const constant = require("../../utils/constant");
const utils = require("../../utils/util");
const converter = require("../../utils/converter");
const jwtToken = require("../../utils/jwt_token");

class Auth {
  async login(payload) {
    const { username, password } = payload;
    try {
      const user = await utils.checkUser(username);
      if (user === undefined) {
        return wrapper.error(
          new error.BadRequestError(
            constant.FAILED_MESSAGE.USERNAME_OR_PASSWORD_NOT_VALID
          )
        );
      }
      const checkPass = await converter.checkHashedPassword(
        password,
        user[0].password
      );
      if (!checkPass) {
        return wrapper.error(
          new error.BadRequestError(
            constant.FAILED_MESSAGE.USERNAME_OR_PASSWORD_NOT_VALID
          )
        );
      }
      var result = await jwtToken.getAuthToken(user[0]);
      return wrapper.data(result);
    } catch (err) {
      return wrapper.error(new error.ServerError(err));
    }
  }
}
module.exports = new Auth();

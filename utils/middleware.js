const error = require("./error");
const constants = require("./constant");
const wrapper = require("./wrapper");
async function authenticationJwt(req, res, next) {
  try {
    if (!req.headers["authorization"]) {
      throw new error.ForbiddenError();
    } else {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      if (token == null) throw new error.UnauthorizedError();
      jwt.verify(token, constants.SECRET.JWT, (err, user) => {
        if (err) {
          throw new error.UnauthorizedError(err);
        } else {
          next();
        }
      });
    }
  } catch (error) {
    wrapper.response(res, error);
  }
}
module.exports = { authenticationJwt };

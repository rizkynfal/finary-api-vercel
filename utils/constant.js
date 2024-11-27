const SUCCESS_MESSAGE = {
  FETCH_SUCCESS: "Fetch Success",
  INSERT_SUCCESS: "Insert Success",
};
const FAILED_MESSAGE = {
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "Not Found",
  SERVER_ERROR: "Server Error",
  TOO_MANY_REQUEST: "Too Many Request",
  PAYLOAD_NOT_VALID: "Payload or Params Not Valid",
  USERNAME_OR_PASSWORD_NOT_VALID: "Username or Password Not Valid",
  LOGIN_FAILED: "Login Failed",
  USERNAME_EXISTS: "Username Already Exists/Used",
  CATATAN_FAILED:"Failed fetch catatan",
};
const RESPONSE_CODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  TOO_MANY_REQUEST: 429,
};
const SECRET = {
  JWT: process.env.SECRET_TOKEN,
  JWT_EXPIRE: "8h",
  JWT_REFRESH_EXPIRE: "24h",
};
module.exports = {
  SUCCESS_MESSAGE,
  SECRET,
  FAILED_MESSAGE,
  RESPONSE_CODES,
};

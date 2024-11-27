const constUtil = require("./constant");

const response = (
  res,
  data,
  msg = constUtil.SUCCESS_MESSAGE.FETCH_SUCCESS,
  statusCode = constUtil.RESPONSE_CODES.SUCCESS
) => {
  const code = data.err !== null ? data.err.status : statusCode;
  const success = data.err !== null ? false : true;
  const result = data.data ?? {};
  const message = data.err !== null ? data.err.message : msg;
  res.status(code).json({ code, success, message, result });
};
const error = (err) => ({ err, data: null });
const data = (data) => ({ err: null, data });

module.exports = { response, error, data };

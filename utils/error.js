const constantUtil = require("./constant");

class ErrorHandler extends Error {
  constructor(msg, status) {
    super(msg, status);
    this.msg = msg;
    this.status = status;
  }
}
class UnauthorizedError extends ErrorHandler {
  constructor(
    msg = constantUtil.FAILED_MESSAGE.UNAUTHORIZED,
    status = constantUtil.RESPONSE_CODES.UNAUTHORIZED
  ) {
    super(msg, status);
  }
}
class BadRequestError extends ErrorHandler {
  constructor(
    msg = constantUtil.FAILED_MESSAGE.BAD_REQUEST,
    status = constantUtil.RESPONSE_CODES.BAD_REQUEST
  ) {
    super(msg, status);
  }
}
class NotFoundError extends ErrorHandler {
  constructor(
    msg = constantUtil.FAILED_MESSAGE.NOT_FOUND,
    status = constantUtil.RESPONSE_CODES.NOT_FOUND
  ) {
    super(msg, status);
  }
}
class ForbiddenError extends ErrorHandler {
  constructor(
    msg = constantUtil.FAILED_MESSAGE.FORBIDDEN,
    status = constantUtil.RESPONSE_CODES.FORBIDDEN
  ) {
    super(msg, status);
  }
}
class ServerError extends ErrorHandler {
  constructor(
    msg = constantUtil.FAILED_MESSAGE.SERVER_ERROR,
    status = constantUtil.RESPONSE_CODES.SERVER_ERROR
  ) {
    super(msg, status);
  }
}
class TooManyRequestError extends ErrorHandler {
  constructor(
    msg = constantUtil.FAILED_MESSAGE.TOO_MANY_REQUEST,
    status = constantUtil.RESPONSE_CODES.TOO_MANY_REQUEST
  ) {
    super(msg, status);
  }
}

module.exports = {
  ErrorHandler,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ServerError,
  BadRequestError,
  TooManyRequestError,
};

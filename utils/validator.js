const { BadRequestError } = require("./error");
const wrapper = require("./wrapper");
const constant = require("./constant");
const checkPayload = (modelValidator) => {
  const { error } = modelValidator;
  if (error) {
    return wrapper.error(
      new BadRequestError(constant.FAILED_MESSAGE.PAYLOAD_NOT_VALID)
    );
  } else {
    return wrapper.data(true);
  }
};

module.exports = {
  checkPayload,
};

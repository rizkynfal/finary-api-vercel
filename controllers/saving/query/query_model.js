const Joi = require("joi");

const getSavingByUsernameModel = (params) => {
  const schema = Joi.object({
    username: Joi.string().required(),
  });
  return schema.validate(params);
};
module.exports = { getSavingByUsernameModel };

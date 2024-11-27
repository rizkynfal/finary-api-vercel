const Joi = require("joi");

const getCatatanByUsernameModel = (params) => {
  const schema = Joi.object({
    username: Joi.string().required(),
  });
  return schema.validate(params);
};
module.exports = { getCatatanByUsernameModel };

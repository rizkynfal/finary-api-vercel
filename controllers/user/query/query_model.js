const Joi = require("joi");

const getUserByUsername = (params) =>
  Joi.object({
    username: Joi.string().required(),
  }).validate(params);
module.exports = { getUserByUsername };

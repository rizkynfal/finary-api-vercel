const Joi = require("joi");

const createUser = (payload) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    nama: Joi.string().required(),
    password: Joi.string().required(),
    tanggal_lahir: Joi.string().required(),
  });
  return schema.validate(payload);
};

module.exports = { createUser };

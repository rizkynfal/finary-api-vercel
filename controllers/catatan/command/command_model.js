const Joi = require("joi");

const insertCatatanModel = (payload) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    tanggal: Joi.string().required(),
    kategori_catatan: Joi.string().required(),
    kategori: Joi.string().required(),
    jumlah_uang: Joi.string().required(),
    keterangan: Joi.string().required(),
  });
  return schema.validate(payload);
};
module.exports = { insertCatatanModel };

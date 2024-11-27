const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
const checkHashedPassword = async (password, hashedPassword) => {
  const validPass = await bcrypt.compare(password, hashedPassword);
  if(!validPass) {
    return false;
  }
  return true;
};
module.exports = { hashPassword, checkHashedPassword };

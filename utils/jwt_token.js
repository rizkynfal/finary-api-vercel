const jwt = require("jsonwebtoken");
const constants = require("./constant");
async function generateAccessToken(user) {
  return jwt.sign(user, constants.SECRET.JWT, {
    expiresIn: constants.SECRET.JWT_EXPIRE,
  });
}
async function generateRefreshToken(user) {
  return jwt.sign(user, constants.SECRET.JWT, {
    expiresIn: constants.SECRET.JWT_REFRESH_EXPIRE,
  });
}
async function getAuthToken(user) {
  const accessToken = await generateAccessToken(user);
  const refreshToken = await generateRefreshToken(user);

  const accessTokenExpDate = new Date();
  accessTokenExpDate.setHours(
    accessTokenExpDate.getHours() + 1,
    accessTokenExpDate.getMinutes(),
    accessTokenExpDate.getSeconds()
  );
  const refreshTokenExpDate = new Date();
  refreshTokenExpDate.setHours(
    refreshTokenExpDate.getHours() + 3,
    refreshTokenExpDate.getMinutes(),
    refreshTokenExpDate.getSeconds()
  );

  const response = {
    tokenType: "Bearer",
    accessToken: accessToken,
    accessTokenExpDate: accessTokenExpDate.toString(),
    refreshToken: refreshToken,
    refreshTokenExpDate: refreshTokenExpDate.toString(),
    logedin: true,
  };

  return response;
}

module.exports = {
  generateAccessToken,
  getAuthToken,
  generateRefreshToken,
};

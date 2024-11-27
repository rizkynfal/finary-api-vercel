require("dotenv").config();
const express = require("express");
const apiHandler = require("./controllers/api_handler");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const middleware = require("./utils/middleware");
const MigrationDB = require("./database/migration");
new MigrationDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/healthCheck", apiHandler.healthCheck);
// auth
app.post("/v1/auth/login", apiHandler.login);
// catatan
app.get(
  "/v1/catatan/getCatatanByUsername/:username",
  apiHandler.getCatatanByUsername
);
app.post("/v1/catatan/insertCatatan", apiHandler.insertCatatan);
// saving
app.post("/v1/saving/insertSaving", apiHandler.insertSaving);
app.get(
  "/v1/saving/getSavingByUsername/:username",
  apiHandler.getSavingByUsername
);
// users
app.get("/v1/user/getAllUsers", apiHandler.getAllUsers);
app.get("/v1/user/getUserByUsername/:username", apiHandler.getUserByUsername);
app.post("/v1/user/register", apiHandler.createUser);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

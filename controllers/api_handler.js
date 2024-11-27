const { DB } = require("../database/conn");
const db = new DB();
// saving
const savingCommand = require("./saving/comand/command_handler");
const savingQuery = require("./saving/query/query_handler");
const savingQueryModel = require("./saving/query/query_model");
// catatan
const catatanCommand = require("./catatan/command/command_handler");
const catatanQuery = require("./catatan/query/query_handler");
const catatanCommandModel = require("./catatan/command/command_model");
const catatanQueryModel = require("./catatan/query/query_model");
// user
const userQuery = require("./user/query/query_handler");
const userCommand = require("./user/command/command_handler");
const userCommandModel = require("./user/command/command_model");
const userQueryModel = require("./user/query/query_model");
// auth
const auth = require("./auth/auth");

const error = require("../utils/error");
const validator = require("../utils/validator");
const wrapper = require("../utils/wrapper");

const healthCheck = async (req, res) => {
  const database = await db.getConnDB();
  let result = "Api is ready";
  if (database.err) {
    wrapper.response(res, new error.ServerError());
  } else {
    wrapper.response(res, result);
  }
};
// AUTH
const login = async (req, res) => {
  const payload = req.body;
  const login = async () => {
    return await auth.login(payload);
  };
  wrapper.response(res, await login(payload));
};
// COMMAND USER
const createUser = async (req, res) => {
  const payload = req.body;
  const createUser = async () => {
    const validatePayload = validator.checkPayload(
      userCommandModel.createUser(payload)
    );
    if (validatePayload.err) {
      return wrapper.error(validatePayload.err);
    }
    return await userCommand.createUser(payload);
  };
  wrapper.response(res, await createUser());
};
// COMMAND SAVING
const insertSaving = async (req, res) => {
  const payload = req.body;
  const insertSaving = async () => {
    const validatePayload = validator.checkPayload(
      savingCommand.insertSaving(payload)
    );
    if (validatePayload.err) {
      return wrapper.error(validatePayload.err);
    }
    return await savingCommand.insertSaving(payload);
  };
  wrapper.response(res, await insertSaving(payload));
};
// COMMAND CATATAN
const insertCatatan = async (req, res) => {
  const payload = req.body;
  console.log(payload);
  const insertCatatan = async () => {
    const validatePayload = validator.checkPayload(
      catatanCommandModel.insertCatatanModel(payload)
    );
    if (validatePayload.err) {
      console.log(validatePayload.err);
      return wrapper.error(validatePayload.err);
    }
    return await catatanCommand.insertCatatan(payload);
  };
  wrapper.response(res, await insertCatatan(payload));
};
// QUERY SAVING
const getSavingByUsername = async (req, res) => {
  const params = req.params;
  const getSavingByUsername = async () => {
    const validatePayload = validator.checkPayload(
      savingQueryModel.getSavingByUsernameModel(params)
    );
    if (validatePayload.err) {
      return wrapper.error(validatePayload.err);
    }
    return await savingQuery.getSavingByUsername(params);
  };
  wrapper.response(res, await getSavingByUsername(params));
};
// QUERY CATATAN
const getCatatanByUsername = async (req, res) => {
  const params = req.params;

  const getCatatanByUsername = async () => {
    const validatePayload = validator.checkPayload(
      catatanQueryModel.getCatatanByUsernameModel(params)
    );
    if (validatePayload.err) {
      return wrapper.error(validatePayload.err);
    }
    return await catatanQuery.getCatatanByUsername(params);
  };
  wrapper.response(res, await getCatatanByUsername(params));
};
// QUERY USER
const getAllUsers = async (req, res) => {
  const getAllUsers = async () => {
    return await userQuery.getAllUsers();
  };
  wrapper.response(res, await getAllUsers());
};
const getUserByUsername = async (req, res) => {
  const params = req.params;

  const getUserByUsername = async () => {
    const validatePayload = validator.checkPayload(
      userQueryModel.getUserByUsername(params)
    );
    if (validatePayload.err) {
      return wrapper.error(validatePayload.err);
    }
    return await userQuery.getUserByUsername(params);
  };
  wrapper.response(res, await getUserByUsername());
};
module.exports = {
  healthCheck,
  createUser,
  getAllUsers,
  getUserByUsername,
  insertSaving,
  insertCatatan,
  getCatatanByUsername,
  login,
  getSavingByUsername,
};

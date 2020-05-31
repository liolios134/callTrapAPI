const express = require("express");
const route = express.Router();



route.use("/users", require("./users"));
route.use("/genders", require("./genders"));

module.exports = route;
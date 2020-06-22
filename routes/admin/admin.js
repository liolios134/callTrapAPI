const express = require("express");
const UploadController = require("../../controllers/UploadController");
const route = express.Router();

route.use("/users", require("./users"));
route.use("/clients", require("./clients"));
route.use("/genders", require("./genders"));

route.post("/upload", upload.any(), UploadController.uploadPhoto);

module.exports = route;
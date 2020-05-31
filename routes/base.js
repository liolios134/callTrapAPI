const express = require("express");
const route = express.Router();
const UploadController = require("../controllers/UploadController");


route.use("/admin", require("./admin/admin"));

route.post("/upload", upload.single("avatar"), UploadController.uploadPhoto);

route.use((req, res) => {
    return res.json({
        success: false,
        message: "Page not found"
    })
})

module.exports = route;
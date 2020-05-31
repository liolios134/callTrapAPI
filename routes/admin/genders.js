const express = require("express");
const route = express.Router();
const GenderController = require("../../controllers/GenderController");

// Categories Routes
route.get("/" , GenderController.list );
route.get("/:genderId" , GenderController.getOne );
route.post("/", GenderController.create );
route.delete("/:genderId" , GenderController.deleteGender );
route.put("/:genderId" , GenderController.updateGender );

module.exports = route;
const express = require("express");
const route = express.Router();
const ClientsController = require("../../Controllers/ClientsController.js");

//Users router
route.get("/", ClientsController.list);
route.get("/:clientId", ClientsController.getOne);
route.post("/", ClientsController.create);
route.delete("/:clientId", ClientsController.deleteClient);
route.put("/:clientId", ClientsController.updateClient);


module.exports = route;
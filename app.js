// Required Libraries
const express = require("express");
const app = express();
const server = require("http").Server(app);
global.io = require("socket.io")(server);
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// require mongoDB
require("./config/db.js");
require("./config/multer.js");
require("./config/sockets.js");

//Initialize express server and port
server.listen(process.env.PORT);
app.use(express.static('public'));
app.use("/upload", express.static('photo'));

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//import application routes
app.use(require("./routes/base"));
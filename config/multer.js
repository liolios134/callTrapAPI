const multer = require("multer");
const path = require("path");

const dest = path.join(__dirname, "/../upload/");
const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb(null, dest)
    },
    filename: (req, file, cb) => {
        let name = file.originalname;
        name = name.toLowerCase();
        name = name.split(" ").join("-");
        name = name.split(".");
        const ext = name.pop();
        name = name.join("-") + '-' + Date.now() + "." + ext;

        console.log(name);

        cb(null, name)
    }
});

global.upload = multer({
    storage: storage
});

const list = (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
};

const getOne = (req, res) => {

    User.findById(req.params.userId, (err, users) => {
        res.json(users);
    });
};



const create = (req, res) => {
    const p = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        phones: req.body.phones,
        photo: req.body.photo
    });
    p.save().then(() => {
        res.json({
            success: true,
            message: "New user added"
        });
    }).catch((err) => {
        res.json({
            message: "New user not added",
            error: err
        });
    });
};

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.userId }, (err) => {
        res.json({
            message: "User deleted"
        });
    });
};

const updateUser = (req, res) => {
    User.updateOne({ _id: req.params.userId }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        phones: req.body.phones,
        photo: req.body.photo
    }, (err) => {
        res.json({
            message: "User successfully updated"
        });
    });
};

const getGenderUser = async (req , res) => {

    const users = await Product.find({gender: req.params.genderId}, (err, users) => {
        res.json(users);
    });
};


module.exports = {
    list,
    getOne,
    create,
    deleteUser,
    getGenderUser,
    updateUser
};

const list = (req, res) => {
    Client.find({}, (err, clients) => {
        res.json(clients);
    });
};

const getOne = (req, res) => {

    Client.findById(req.params.clientId, (err, clients) => {
        res.json(clients);
    });
};



const create = (req, res) => {
    const p = new Client ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        notes: req.body.notes,
        gender: req.body.gender,
        phones: req.body.phones
    });
    p.save().then(() => {
        res.json({
            success: true,
            message: "New Client added"
        });
    }).catch((err) => {
        res.json({
            message: "New Client not added",
            error: err
        });
    });
};

const deleteClient = (req, res) => {
    Client.deleteOne({ _id: req.params.clientId }, (err) => {
        res.json({
            message: "Client deleted"
        });
    });
};

const updateClient = (req, res) => {
    Client.updateOne({ _id: req.params.clientId }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phones: req.body.phones,
        gender: req.body.gender,
        notes: req.body.notes
    }, (err) => {
        res.json({
            message: "Client successfully updated"
        });
    });
};

const getGenderClient = async (req , res) => {

    const clients = await Product.find({gender: req.params.genderId}, (err, clients) => {
        res.json(clients);
    });
};


module.exports = {
    list,
    getOne,
    create,
    deleteClient,
    updateClient,
    getGenderClient
};
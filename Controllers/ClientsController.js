
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
    const c = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phones: req.body.phones,
        notes: req.body.notes
    });
    p.save().then(() => {
        res.json({
            message: "New client added"
        });
    }).catch((err) => {
        res.json({
            message: "New client not added",
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
        notes: req.body.notes
    }, (err) => {
        res.json({
            message: "Client successfully updated"
        });
    });
};




module.exports = {
    list,
    getOne,
    create,
    deleteClient,
    updateClient
};
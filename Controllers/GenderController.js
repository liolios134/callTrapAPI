const list = async (req , res) => {
    const genders = await Gender.find({}).exec();
        return res.json({
            success: true,
            genders: genders
    });
};

const getOne = async (req , res) => {
    const gender = await Gender.findById(req.params.genderId).exec();
                     return res.json({
                        success: true,
                        gender: gender
                     });
    };

const getGender = async (req, res) => {
    const gender = await Gender.findById(req.params.genderId).exec();
        return res.json({
        success:true,
        gender: gender,
    });
}

const create = (req , res ) => {
    const u = new Gender({
        title: req.body.title,
    });
    u.save().then(() => {
        res.json({
            success: true,
            message: "Gender created"
        });
    });
};

const deleteGender = (req , res) => {

    Gender.deleteOne({_id: req.params.genderId}, (err) => {
        res.json({
            success:true,
            message: "Gender deleted"
        });
    });
};

const updateGender = (req , res) => {

    Gender.updateOne({_id: req.params.genderId}, {
        title: req.body.title,
    } , (err) => {
        res.json({
            success:true,
            message: "Gender updated"
        });
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteGender,
    updateGender,
    getGender
};
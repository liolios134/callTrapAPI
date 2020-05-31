const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = mongoose.Schema({
    firstName : {type: String,required: true},
    lastName : {type: String, required: false},
    email : {type: String, unique: true},
    password : {type: String,required: true, bcrypt: true},
    gender: { type: mongoose.Types.ObjectId,
              ref: "Gender"},
    phones: [mongoose.Schema.Types.Mixed],
    photo: {type:String}
},
{
    timestamps:true
});
userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);

const genderSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true
    }

},
{
    timestamps:false
}
);
global.Gender = mongoose.model("Gender", genderSchema);

const phoneSchema = mongoose.Schema({
    phone: Number,
    Name: String
},
{
    _id: false,
    timestamps: false
});
global.Phones = mongoose.model("Phones", phoneSchema);

const clientSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phones: [phoneSchema],
    notes: {type: String}
},
{
    timestamps: true
});
global.Client = mongoose.model("Client", clientSchema);

const callSchema = mongoose.Schema({
    client: {type: mongoose.Types.ObjectId, ref: "Client"},
    phone: {type: Number},
    status: Boolean
},
{
    timestamps:true
});
global.Call = mongoose.model("Call", callSchema);

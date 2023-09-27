const mongoose = require("./baseDB/db");
const ManageSchema = new mongoose.Schema({
    username:String,
    pwd:String
},{
    versionKey: false
})
const ManageModel = mongoose.model("Manage",ManageSchema,"manage");
module.exports = ManageModel;
const mongoose = require("../utils/db")
const UserSchema = new mongoose.Schema({
  name:String,
  avatar:String,
  username:String,
  pwd:String,
  age:String,
  sex:String,
  collect:[{
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    image:String,
    name:String
  }]
},{
  versionKey: false
})
const UserModel = mongoose.model("User",UserSchema,"user");
module.exports = UserModel;
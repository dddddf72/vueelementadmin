const mongoose = require("./baseDB/db");
const CitySchema = new mongoose.Schema({
    label:String,
    value:String,
    children:Array
},{
    versionKey: false
})
const CityModel = mongoose.model("City",CitySchema,"city");
module.exports = CityModel;
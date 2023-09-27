const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  name:String
},{
  versionKey: false
})
const CarouselModel = mongoose.model("navJump",CarouselSchema,"navJump");
module.exports = CarouselModel;
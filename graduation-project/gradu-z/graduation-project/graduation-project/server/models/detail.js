const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  image:String,
  _id:mongoose.Schema.Types.ObjectId
},{
  versionKey: false
})
const CarouselModel = mongoose.model("Search",CarouselSchema,"search");
module.exports = CarouselModel;
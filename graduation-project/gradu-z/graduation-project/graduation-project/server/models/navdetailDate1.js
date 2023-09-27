const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  image:String
},{
  versionKey: false
})
const CarouselModel = mongoose.model("search",CarouselSchema,"search");
module.exports = CarouselModel;
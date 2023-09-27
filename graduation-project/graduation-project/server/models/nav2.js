const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  image:String
},{
  versionKey: false
})
const CarouselModel = mongoose.model("Nav2",CarouselSchema,"nav2");
module.exports = CarouselModel;
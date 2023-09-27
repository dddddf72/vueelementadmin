const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  image:String
},{
  versionKey: false
})
const CarouselModel = mongoose.model("Japan",CarouselSchema,"japan");
module.exports = CarouselModel;
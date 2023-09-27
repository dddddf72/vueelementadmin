const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  image:String
},{
  versionKey: false
})
const CarouselModel = mongoose.model("Nav1",CarouselSchema,"nav1");
module.exports = CarouselModel;
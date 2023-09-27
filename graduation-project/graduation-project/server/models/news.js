const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  image:String
},{
  versionKey: false
})
const CarouselModel = mongoose.model("News",CarouselSchema,"news");
module.exports = CarouselModel;
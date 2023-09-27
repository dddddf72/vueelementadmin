const mongoose = require("../utils/db")
const CarouselSchema = new mongoose.Schema({
  image:String
},{
  versionKey: false
})
const CarouselModel = mongoose.model("navdetailDate2",CarouselSchema,"navdetailDate2");
module.exports = CarouselModel;
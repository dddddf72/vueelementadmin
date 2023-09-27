const router = require("koa-router")();
const mongoose = require("mongoose");
const CarouselModel = require("../../models/detail");
router.get("/detail",async ctx=>{
  var {title} = ctx.query;
  var reg = new RegExp(title.trim())
  // console.log(reg);
  var data = await CarouselModel.find({title:reg});
  ctx.body = {
    code:200,
    msg:"detail",
    res:data
  }
  // console.log(data);
})
module.exports = router;
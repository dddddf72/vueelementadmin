//轮播图
const router = require("koa-router")();
const CarouselModel = require("../../models/Carousel");
router.get("/lunbo",async ctx=>{
  var data = await CarouselModel.find({})
  ctx.body = {
    code:200,
    msg:"轮播图",
    res:data
  }
})
module.exports = router;
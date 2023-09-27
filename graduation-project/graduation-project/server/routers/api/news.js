const router = require("koa-router")();
const CarouselModel = require("../../models/news");
router.get("/news",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"news",
    res:data
  }
})
module.exports = router;
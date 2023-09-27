const router = require("koa-router")();
const CarouselModel = require("../../models/usa");
router.get("/usa",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"usa",
    res:data
  }
})
module.exports = router;
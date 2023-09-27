const router = require("koa-router")();
const CarouselModel = require("../../models/nav2");
router.get("/nav2",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"nav2",
    res:data
  }
})
module.exports = router;
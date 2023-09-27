const router = require("koa-router")();
const CarouselModel = require("../../models/nav1");
router.get("/nav1",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"nav1",
    res:data
  }
})
module.exports = router;
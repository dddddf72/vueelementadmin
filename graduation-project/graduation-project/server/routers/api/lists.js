const router = require("koa-router")();
const CarouselModel = require("../../models/lists");
router.get("/lists",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"lists",
    res:data
  }
})
module.exports = router;
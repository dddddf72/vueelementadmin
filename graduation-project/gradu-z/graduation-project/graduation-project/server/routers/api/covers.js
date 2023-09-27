const router = require("koa-router")();
const CarouselModel = require("../../models/covers");
router.get("/covers",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"covers",
    res:data
  }
})
module.exports = router;
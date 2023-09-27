const router = require("koa-router")();
const CarouselModel = require("../../models/japan");
router.get("/japan",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"japan",
    res:data
  }
})
module.exports = router;
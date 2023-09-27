const router = require("koa-router")();
const CarouselModel = require("../../models/domestic");
router.get("/domestic",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"domestic",
    res:data
  }
})
module.exports = router;
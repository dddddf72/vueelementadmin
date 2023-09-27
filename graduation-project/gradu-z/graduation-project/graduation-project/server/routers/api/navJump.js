const router = require("koa-router")();
const CarouselModel = require("../../models/navJump");
router.get("/navJump",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"navJump",
    res:data
  }
})
module.exports = router;
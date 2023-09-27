const router = require("koa-router")();
const CarouselModel = require("../../models/navdetailDate2");
router.get("/navdetailDate2",async ctx=>{
  var data = await CarouselModel.find({});
  ctx.body = {
    code:200,
    msg:"navdetailDate2",
    res:data
  }
})
module.exports = router;
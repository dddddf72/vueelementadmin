const router = require("koa-router")();
const CarouselModel = require("../../models/navdetailDate1");
router.get("/navdetailDate1",async ctx=>{
  // console.log(ctx.query.keyworld);
  var {keyworld} = ctx.query;
  var reg = new RegExp(keyworld.trim())
  // console.log(reg);
  var data = await CarouselModel.find({$or:[{type:reg},{year:reg},{address:reg},{title:reg}]});
  // console.log(data);
  ctx.body = {
    code:200,
    msg:"navdetailDate1",
    res:data
  }
})
module.exports = router;
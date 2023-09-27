const router = require("koa-router")();
const CarouselModel = require("../../models/navdetailDate1");
router.get('/search', async (ctx, next) => {
  // console.log(ctx.params.title);
  var {keyworld} = ctx.query;
  var reg = new RegExp(keyworld.trim())
  console.log(reg);
  var data = await CarouselModel.find({title:reg})
  ctx.body = {
    res:data
  }
  next()
});
module.exports = router;
//废弃
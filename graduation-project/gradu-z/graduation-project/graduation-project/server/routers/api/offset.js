const router = require("koa-router")();
const CarouselModel = require("../../models/movies");
router.get("/movies&:offset",async ctx=>{
  // console.log(ctx.params.offset);
  var offset = "0";
  var offset = ctx.params.offset;
  var limit = "35";
  var data = await CarouselModel.find({}).skip(Number(offset)).limit(Number(limit));
  ctx.body = {
    code:200,
    msg:"movies",
    res:data
  }
})
module.exports = router;
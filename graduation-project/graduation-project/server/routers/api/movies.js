const router = require("koa-router")();
const CarouselModel = require("../../models/movies");
router.get("/movies",async ctx=>{
  // console.log(ctx.query);
  var data = await CarouselModel.find({})
  ctx.body = {
    code:200,
    msg:"movies",
    res:data
  }
})
module.exports = router;
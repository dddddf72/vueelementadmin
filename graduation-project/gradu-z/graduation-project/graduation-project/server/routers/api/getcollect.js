const router = require("koa-router")();
const UserModel = require("../../models/user");
router.post("/getCollect",async ctx=>{
  console.log(ctx.request.body);
  // var data = await UserModel.find({});
  // console.log(data);
  // ctx.body = {
  //   code:200,
  //   msg:"获取收藏",
  //   res:data
  // }
})
module.exports = router;
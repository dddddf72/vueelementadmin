const router = require("koa-router")();
const UserModel = require("../../models/user");
router.post("/delete",async ctx=>{
  var {username,title} = ctx.request.body;
  var data = await UserModel.updateOne({username},{$pull:{collect:{title}}});
  console.log(data);
  ctx.body = {
    code:200,
    msg:"删除收藏",
    res:data
  }
})
module.exports = router;
const router = require("koa-router")();
const UserModel = require("../../models/user");
router.get("/edit",async ctx=>{
  var {username} = ctx.query;
  var data = await UserModel.find({username});
  // console.log(data);
  ctx.body = {
    code:200,
    msg:"edit",
    res:data
  }
})
module.exports = router;
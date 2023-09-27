const router = require("koa-router")();
const UserModel = require("../../models/user");
router.post("/doLogon",async ctx=>{
  var {num,pwd} = ctx.request.body;
  var res = await UserModel.find({username:num,pwd:pwd});
  // console.log(res);
  ctx.body = {
    code:200,
    msg:"info",
    data:res
  }
})
module.exports = router;
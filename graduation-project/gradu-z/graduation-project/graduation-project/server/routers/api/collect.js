const router = require("koa-router")();
const UserModel = require("../../models/user");
router.post("/collect",async ctx=>{
  var {id,title,image,name,state,username} = ctx.request.body;
  var data = {
    id,title,image,name,state
  }
  if(state==true){
    await UserModel.updateOne({username},{$push:{collect:data}});
    ctx.body = {
      code:200,
      msg:"收藏成功"
    }
  }else if(state==false) {
    await UserModel.updateOne({username},{$pull:{collect:{title}}});
    ctx.body = {
      code:200,
      msg:"取消收藏"
    }
  }
})
module.exports = router;
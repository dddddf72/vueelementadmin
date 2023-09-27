const router = require("koa-router")()
const UserModel = require("../../models/user")
router.post("/api/delHistory",async ctx=>{
    var {id,username} = ctx.request.body
    await UserModel.updateOne({username},{$pull:{history:{_id:id}}})
    ctx.body={
        code:200,
        msg:"删除历史记录成功"
    }
})
module.exports=router
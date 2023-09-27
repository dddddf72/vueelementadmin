const router = require("koa-router")()
const UserModel = require("../../models/user")
router.get("/api/getHistory",async ctx=>{
    var {username} = ctx.query
    var data = await UserModel.find({username},{history:1})
    var result = data[0].history
    ctx.body={
        result,
        msg:"历史记录"
    }
})
module.exports=router
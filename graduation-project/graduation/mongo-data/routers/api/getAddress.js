const router = require("koa-router")()
const UserModel = require("../../models/user")
router.get("/api/getAddress",async ctx=>{
    var {username} = ctx.query
    var data = await UserModel.find({username},{address:1})
    ctx.body={
        code:200,
        data,
        msg:"收货地址信息"
    }
})
module.exports=router
const router = require("koa-router")()
const UserModel = require("../../models/user")
router.get("/api/collectList",async ctx=>{
    var {username} = ctx.query
    var data = await UserModel.find({username})
    var result = data[0].collects
    ctx.body={
        result,
        msg:"收藏的商品"
    }
})
module.exports=router

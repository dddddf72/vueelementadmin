const router = require("koa-router")()
const UserModel = require("../../models/user")
router.get("/api/getCart",async ctx=>{
    var {username} = ctx.query
    var data = await UserModel.find({username})
    var result = data[0].shopCart
    ctx.body={
        result,
        msg:"购物车中的商品"
    }
})
module.exports=router
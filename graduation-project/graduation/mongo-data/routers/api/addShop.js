const router = require('koa-router')()
const UserModel = require("../../models/user")
const GoodsModel = require("../../models/goodsList")
router.post('/api/addCart',async ctx=>{
    var {username,id} = ctx.request.body
    var data = await GoodsModel('goodsList').find({_id:id})
    var res = await UserModel.updateOne({username},{$push:{shopCart:data[0]}})
    console.log(res)
    ctx.body={
        code:200,
        msg:"添加到购物车"
    }
})
module.exports = router
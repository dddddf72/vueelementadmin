const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
router.get("/api/getGoodsById",async ctx=>{
    var {id} = ctx.query
    var data = await GoodsModel('goodsList').find({_id:id})
    ctx.body={
        code:200,
        result:data,
        msg:"商品信息"
    }
})
module.exports = router
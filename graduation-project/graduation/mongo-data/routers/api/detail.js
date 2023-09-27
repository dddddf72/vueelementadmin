const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
router.get("/api/detail",async ctx=>{
    var {id} = ctx.query
    var data = await GoodsModel('goodsList').find({_id:id})
    ctx.body={
        code:200,
        result:data,
        msg:"详情页数据"
    }
})
module.exports = router
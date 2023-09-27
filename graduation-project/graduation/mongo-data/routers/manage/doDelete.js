const router = require('koa-router')()
const GoodsModel = require("../../models/goodsList")
router.post("/manage/doDelete",async ctx=>{
    var {id,table} = ctx.request.body
    await GoodsModel(table).deleteOne({_id:id})
    ctx.body={
        code:200,
        msg:'已成功删除此条商品'
    }
})
module.exports = router
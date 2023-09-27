const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
router.post("/manage/doEdit",async ctx=>{
    var {_id,title,price,store,table,num,collected} = ctx.request.body
    var data = {
        title,
        price,
        store,
        table,
        num:Number(num),
        collected:Boolean(collected)
    }
    await GoodsModel('goodsList').updateOne({_id},data)
    await GoodsModel(table).updateOne({_id},data)
    ctx.body={
        code:200,
        msg:'修改商品信息成功'
    }
})
module.exports = router
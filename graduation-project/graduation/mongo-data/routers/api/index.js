const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
router.get("/api/data",async ctx=>{
    var {start,table} = ctx.query
    if(start==undefined){
        start=0
    }
    var data = await GoodsModel(table).find({}).sort({title:-1}).skip(Number(start)).limit(12)
    ctx.body={
        code:200,
        result:data,
        msg:"商品信息列表"
    }
})
module.exports = router
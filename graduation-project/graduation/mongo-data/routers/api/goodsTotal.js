const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
router.get("/api/goodsTotal",async ctx=>{
    var {table} = ctx.query
    var data = await GoodsModel(table).find()
    ctx.body={
        code:200,
        result:data,
        msg:table
    }
})
module.exports = router
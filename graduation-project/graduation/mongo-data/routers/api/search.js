const router =  require("koa-router")()
const GoodsModel = require("../../models/goodsList")
router.get("/api/search",async ctx=>{
    var {keyword,start} = ctx.query
    if(start==undefined){
        start=0
    }
    var reg = new RegExp(keyword)
    var data = await GoodsModel('goodsList').find({title:reg}).skip(Number(start)).limit(12)
    ctx.body={
        code:200,
        result:data,
        msg:"搜索页数据"
    }
})
module.exports = router
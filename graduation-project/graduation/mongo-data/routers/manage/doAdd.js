const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
router.post('/manage/doAdd',async ctx=>{
        var {title,price,goodsImg,store,collected,table,num} = ctx.request.body
        var data = new GoodsModel('goodsList')({
            title,
            price,
            goodsImg,
            store,
            collected:Boolean(collected),
            table,
            num:Number(num)
        })
        var tables = new GoodsModel(table)({
            title,
            price,
            goodsImg,
            store,
            collected:Boolean(collected),
            table,
            num:Number(num)
        })
        data.save(err=>{
            if(err){ throw err}
        })
        tables.save(err=>{
            if(err){ throw err}
        })
        ctx.body={
            code:200,
            msg:"添加商品成功！"
        }
})
module.exports = router
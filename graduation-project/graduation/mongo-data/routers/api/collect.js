const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
const UserModel = require("../../models/user")
router.post('/api/collect/:table',async ctx=>{
    var {table} = ctx.request.params
    var {id,collected,username} = ctx.request.body
    try{
        await GoodsModel(table).updateOne({_id:id},{$set:{collected}})
        await GoodsModel('goodsList').updateOne({_id:id},{$set:{collected}})
        var item = await GoodsModel('goodsList').find({_id:id})
        if(collected){
            await UserModel.updateOne({username},{$push:{collects:item[0]}})
            ctx.body={
                code:200,
                msg:"收藏成功"
            }
        }else{
            await UserModel.updateOne({username},{$pull:{collects:{_id:id}}})
            ctx.body={
                code:200,
                msg:"取消收藏"
            }
        }
    }catch(err){
        // id , collected 走catch
        ctx.body={
            code:400,
            msg:"输入的参数不合法"
        }
    }
})
module.exports = router
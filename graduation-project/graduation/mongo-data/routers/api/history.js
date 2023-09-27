const router = require("koa-router")()
const GoodsModel = require("../../models/goodsList")
const UserModel = require("../../models/user")
router.post('/api/history',async ctx=>{
    var {id,username} = ctx.request.body
    try{
        var item = await GoodsModel('goodsList').find({_id:id})
        var isHistory = await UserModel.find({username,"history._id":id})
        if(!isHistory.length){
            await UserModel.updateOne({username},{$push:{history:item[0]}})
            ctx.body={
                code:200,
                msg:'添加到历史记录'
            }
        }else{
            ctx.body={
                code:400,
                msg:"历史记录中已存在"
            }
        }
        
    }catch(err){
        ctx.body={
            code:400,
            msg:"输入的参数不合法"
        }
    }
})
module.exports = router
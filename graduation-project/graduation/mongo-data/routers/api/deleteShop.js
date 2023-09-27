const router = require('koa-router')()
const UserModel = require("../../models/user")
router.post('/api/deleteCart',async ctx=>{
    var {id,username} = ctx.request.body
    await UserModel.updateOne({username},{$pull:{shopCart:{_id:id}}})
    ctx.body={
        code:200,
        msg:"删除成功"
    }
})
module.exports = router
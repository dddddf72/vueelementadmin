const router = require("koa-router")()
const UserModel = require("../../models/user")
router.post('/api/doLogin',async ctx=>{
    var {username,pwd} = ctx.request.body
    var res = await UserModel.find({username,pwd})
    console.log(res)
    console.log(ctx.request.body)
    if(res.length){
        ctx.cookies.set('loginAuth',true,{
            httpOnly:false
        })
        ctx.body={
            code:200,
            msg:'登录成功'
        }
    }else{
        ctx.body={
            code:400,
            msg:"用户名或密码错误"
        }
    }
})
module.exports = router
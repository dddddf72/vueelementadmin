const router = require("koa-router")()
const UserModel = require("../../models/user")
router.post('/api/doRegister',async ctx=>{
    var {username,pwd,address} = ctx.request.body
    var db = new UserModel({username,pwd,address:[address]})
    db.save(err=>{
        if(err) throw err;
    })
    ctx.cookies.set('loginAuth',true,{
        httpOnly:false
    })
    ctx.body={
        code:200,
        msg:'注册成功'
    }
})
module.exports = router
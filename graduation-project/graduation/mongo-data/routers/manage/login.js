const router = require('koa-router')()
const ManageModel = require("../../models/manage")
router.post("/manage/login",async ctx=>{
    var {username,pwd} = ctx.request.body
    var data = await ManageModel.find({username,pwd})
    if(data.length){
        ctx.cookies.set('ManageLogin',true,{
            httpOnly:false    
        })
        ctx.body={
            code:200,
            msg:'登录成功'
        }
    }else{
        ctx.body={
            code:400,
            msg:'用户名或密码错误'
        }
    }
    
})
module.exports = router;
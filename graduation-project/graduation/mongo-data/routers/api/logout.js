const router = require("koa-router")()
router.post('/api/logout',async ctx=>{
    ctx.cookies.set('loginAuth','')
    ctx.body={
        code:200,
        msg:'退出登录'
    }
})
module.exports = router
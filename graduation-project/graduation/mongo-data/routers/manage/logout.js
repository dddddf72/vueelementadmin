const router = require('koa-router')()
router.post("/manage/logout",async ctx=>{
    ctx.cookies.set('ManageLogin','')
    ctx.body={
        code:200,
        msg:'退出登录'
    }
})
module.exports = router;
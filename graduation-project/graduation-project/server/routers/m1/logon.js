const router = require("koa-router")();
router.get("/logon",async ctx=>{
  if(ctx.cookies.get("Logon")){
    ctx.redirect("/")
  }else{
    await ctx.render("logon")
  }
})
module.exports = router;
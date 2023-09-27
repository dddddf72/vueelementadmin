const Koa = require("koa");
const app = new Koa();
const initManage = require("./config");
// 登录拦截中间件
// app.use(async (ctx,next)=>{
//     var url = ctx.request.url
//     if(url == '/login' || url == '/manage/doLogin' || url == '/register' || url == '/manage/doRegister'){
//         await next()
//     }else{
//         if(ctx.cookies.get('login')){
//             await next()
//         }else{
//             await ctx.redirect('/login')
//         }
//     }
// })
initManage(app);
app.listen(4002)
const koaBody = require('koa-body')
const cors = require("koa2-cors")
const Router = require("koa-router");
const requireDirectory = require("require-directory");
const render = require('koa-art-template');
const static = require('koa-static');

function initManage(app) {
    app.use(koaBody({
        // 支持文件格式
        multipart: true, // 支持图片上传
        formidable: {
            maxFileSize: 20*1024*1024, // 文件最大2OMB
            keepExtensions: true     // 保留文件扩展名
        }
    }));
    app.use(cors({
        origin:ctx=>{
            return ctx.headers.origin  // 获取发起请求的地址
        },
        credentials:true   // 可以跨域访问cookie
    }))
    
    /* 加载/routers/m1下的文件时,会触发loadRouters函数 */
    requireDirectory(module, `${process.cwd()}/routers`, {
        visit: loadRouters
    })
    render(app, {
        root: `${process.cwd()}/views`,
        extname: '.html', //后缀也可以写成.art
        debug: process.env.NODE_ENV !== 'production'
    });
    function loadRouters(obj) {
        if (obj instanceof Router) {
            app.use(obj.routes());
        }
    }
    app.use(static(`${process.cwd()}/static`));
}
module.exports = initManage;
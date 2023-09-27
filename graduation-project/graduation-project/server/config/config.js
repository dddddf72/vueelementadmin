const Router = require("koa-router");
const cors = require("koa2-cors");
const requireDirectory = require("require-directory");
const koaBody = require("koa-body")
const static = require("koa-static")
function initManage(app) {
  app.use(cors())
    app.use(koaBody({
    // 支持文件格式
      multipart: true,
      formidable: {
      maxFileSize: 20 * 1024 * 1024, //文件最大不能超过20MB
      // 保留文件扩展名
      keepExtensions: true,
    }
  }));
  /* 加载/routers/m1下的文件时,会触发loadRouters函数 */
  requireDirectory(module, `${process.cwd()}/routers`, {
    visit: loadRouters
  })
    function loadRouters(obj) { 
        if (obj instanceof Router) {
            app.use(obj.routes());
        }
    }
    app.use(static(`${process.cwd()}/static`));
}
module.exports = initManage;
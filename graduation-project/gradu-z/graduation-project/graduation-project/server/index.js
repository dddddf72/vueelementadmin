const koa = require("koa");
const app = new koa();
const initManage = require("./config/config");
initManage(app);
app.listen(8001);
  
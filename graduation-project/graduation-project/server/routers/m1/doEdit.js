const router = require("koa-router")();
const path = require("path");
const UserModel = require("../../models/user");
// 查询数据库
const fileUpload = require("../../utils/upload");
router.post("/doEdit", async ctx => {
    var file = ctx.request.files.file;
    var uploadName = path.basename(file.path);
    var isUpload = Boolean(file.name.trim());
    var {name,num,passwd,age,sex} = ctx.request.body;
    var username = num;
    var pwd = passwd;
    /* 将本地图片放到服务器的static文件夹中 */
    if (isUpload) {
        fileUpload(file.path, uploadName);
        var avatar = ctx.origin + "/" + uploadName;
        var data = {
          name,
          avatar,
          pwd,
          age,
          sex,
          avatar
        }
    } 
    await UserModel.updateOne({ username:username},data);
})
module.exports = router;
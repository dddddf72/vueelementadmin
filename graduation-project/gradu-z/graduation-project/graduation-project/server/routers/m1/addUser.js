const router = require("koa-router")();
const path = require("path");
const UserModel = require("../../models/user");
const fileUpload = require("../../utils/upload");
router.post('/rist', async ctx=> {
  var file  = ctx.request.files.file;
  var uploadName = path.basename(file.path); //处理图片路径
  var isUpload = Boolean(file.name.trim());
  var {name,num,passwd,age,sex} = ctx.request.body;
  if(isUpload){
    fileUpload(file.path,uploadName);
    var avatar = ctx.origin +"/"+uploadName;
    var username = num;
    var pwd = passwd;
    var data = new UserModel({name,avatar,username,pwd,age,sex})
  }else {
    var data = new UserModel({name,num,passwd,age,sex})
  }
    data.save(err=>{
        if(err){throw err};
    })
}) 
module.exports = router;
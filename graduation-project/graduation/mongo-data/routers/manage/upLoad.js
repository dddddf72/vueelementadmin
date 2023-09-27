const router = require('koa-router')()
const ManageModel = require("../../models/manage")
const path = require("path")
const fs = require("fs")
router.post("/manage/upLoad",async ctx =>{
    var file  = ctx.request.files.file;
    var uploadName = path.basename(file.path);
    if(file){
        const reader = fs.createReadStream(file.path);
        let filePath = process.cwd() + `/static/${uploadName}`;
        const upStream = fs.createWriteStream(filePath);
        reader.pipe(upStream);
        var avatar = ctx.origin +"/"+uploadName;
    }
    ctx.body={
        code:200,
        msg:'图片上传成功',
        url:avatar
    }
})
module.exports = router;
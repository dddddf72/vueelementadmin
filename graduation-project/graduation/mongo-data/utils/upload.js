const fs = require('fs')

function fileUpload(localPath,uploadName){
   const reader = fs.createReadStream(localPath);
   // 获取上传文件扩展名
   let filePath = process.cwd() + `/static/${uploadName}`;
   // 创建可写流
   const upStream = fs.createWriteStream(filePath);
   // 可读流通过管道写入可写流
   reader.pipe(upStream);
}
module.exports=fileUpload
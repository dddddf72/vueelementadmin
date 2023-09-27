/* 
localPath 上传图片所在的路径
uploadName  上传到服务的图片名
 */
const fs = require("fs");/* 使用这个模块可以实现文件的读写 */
function fileUpload(localPath,uploadName){
    // 创建可读流
    const reader = fs.createReadStream(localPath);
    // 获取上传文件扩展名
    let filePath = process.cwd() + `/static/${uploadName}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
}
module.exports = fileUpload;
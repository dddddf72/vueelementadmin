const mongoose = require("mongoose");
/* 1.连接本地数据库 */
mongoose.connect('mongodb://127.0.0.1:27017/Carousel', {
    useNewUrlParser: true
});
module.exports = mongoose;

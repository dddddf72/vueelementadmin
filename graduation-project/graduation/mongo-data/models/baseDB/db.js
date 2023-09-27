const mongoose = require("mongoose");
/* 1.连接本地数据库 */
// mongoose.connect('mongodb://test:123@123.60.44.105/shop?authSource=admin', {
mongoose.connect('mongodb://test:123@124.71.191.216/shops?authSource=admin', {
// mongoose.connect('mongodb://127.0.0.1:27017/shops', {
    useNewUrlParser: true
});
var GoodsListSchema = new mongoose.Schema({
    title: String,
    price: String,
    goodsImg: String,
    store: String,
    collected: Boolean,
    table: String
}, {
    versionKey: false
})
function GoodsModel (table) {
    return mongoose.model(table, GoodsListSchema, table);
}
module.exports = GoodsModel;







module.exports = mongoose;
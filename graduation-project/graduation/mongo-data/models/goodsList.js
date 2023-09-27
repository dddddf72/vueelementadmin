const mongoose = require("./baseDB/db");
const GoodsSchema = require("./Schema/goods")
const GoodsListSchema = new mongoose.Schema(GoodsSchema)
function GoodsModel(table){
    return  mongoose.model(table,GoodsListSchema,table);
}
module.exports = GoodsModel; 
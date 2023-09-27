const mongoose = require("./baseDB/db");
const UserSchema = new mongoose.Schema({
    username:String,
    pwd:String,
    address:Array,
    shopCart:[
        {_id:mongoose.Schema.Types.ObjectId,title:String,price:String,store:String,goodsImg:String,collected:Boolean,num:Number,table:String}
    ],
    collects:[
        {_id:mongoose.Schema.Types.ObjectId,title:String,price:String,store:String,goodsImg:String,collected:Boolean,table:String,num:Number}
    ],
    history:[
        {_id:mongoose.Schema.Types.ObjectId,title:String,price:String,store:String,goodsImg:String,collected:Boolean,table:String,num:Number}
    ]
},{
    versionKey: false
})
const UserModel = mongoose.model("User",UserSchema,"user");
module.exports = UserModel;
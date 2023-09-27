const router = require("koa-router")()
const CityModel = require("../../models/city")
router.get("/api/getCity",async ctx=>{
    var data = await CityModel.find()
    ctx.body={
        code:200,
        data,
        msg:"城市信息"
    }
})
module.exports=router
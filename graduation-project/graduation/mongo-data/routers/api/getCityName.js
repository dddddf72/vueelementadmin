const router = require("koa-router")()
const CityModel = require("../../models/city")
router.get("/api/getCityName",async ctx=>{
    var {province,city,country} = ctx.query
    var province = await CityModel.find({value:province})
    var city =province[0].children.find(item=>item.value == city)
    var country =city.children.find(item=>{
        return item.value == country
    })
    ctx.body={
        code:200,
        res:province[0].label+' '+city.label+' '+country.label,
        msg:"获取的具体城市信息"
    }
})
module.exports=router
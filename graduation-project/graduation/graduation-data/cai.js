const koa = require("koa")
const app = new koa()
const router = require("koa-router")()
const cheerio = require("cheerio")
const puppeteer = require("puppeteer")
router.get("/getData",async ctx=>{
    var {keyword} = ctx.query
    keyword = encodeURIComponent(keyword)
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null
    })
    const page = await browser.newPage()
    await page.goto(`https://search.jd.com/Search?keyword=${keyword}&enc=utf-8`)
    await page.waitForTimeout(1000)
    var content = await page.content()
    var  $ = cheerio.load(content,{
        decodeEntities:false
    })
    var arr = []
    var list = $("#J_goodsList").find(".gl-warp li")
    list.each((index,value)=>{
        var title = $(value).find(".gl-i-wrap .p-name em").text().trim()
        var price = $(value).find(".gl-i-wrap .p-price i").text()
        var store = $(value).find(".gl-i-wrap .p-shop a").attr("title")
        var goodsImg = $(value).find(".gl-i-wrap .p-img img").attr("src")
        arr.push({
            title,
            price,
            store,
            goodsImg
        })
    })
    ctx.body={
        code:200,
        data:arr
    }
    await browser.close();
})

app.use(router.routes())
app.listen(8080)
const Koa = require("koa");
const KoaRouter = require("koa-router");
const BodyParser = require("koa-bodyparser");
const Cors = require("koa-cors");
const Logger = require("koa-logger");
const App = new Koa();
const Router = new KoaRouter();
App.use(Router.routes());
App.use(Router.allowedMethods());
App.use(Cors);
App.use(Logger);
App.use(BodyParser)

//错误处理
App.use('error',(res)=>{
    console.log(res)
})
App.listen(3000,()=>{
    console.log('koa启动了')
})
module.exports = App;

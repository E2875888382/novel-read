var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var session=require('express-session');

//导入路由
var login_Router=require('./router/user/login_Router');//登录路由
var userPage_Router=require('./router/user/userPage_Router');//用户系统路由
var news_Router=require('./router/news/news_Router');//新闻模块路由
var developer_Router=require('./router/developer/developer_Router');//开发者模块路由
var street_Router=require('./router/street/street_Router');//步行街模块路由
var photo_Router=require('./router/photo/photo_Router');//相簿模块路由
var search_Router=require('./router/search/search_Router');//搜索模块路由(主页搜索框)

//解决控制台的内存溢出提示
require('events').EventEmitter.defaultMaxListeners = 0;

var app=express();

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//设置静态文件夹
app.use('/node_modules/',express.static(path.join(__dirname,'../node_modules/')));

//设置跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length,userID');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//配置express-session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    name:'user',
    saveUninitialized: true,
    cookie:{
        maxAge:24*60*60*1000
    }
}));

//挂载router
app.use(login_Router);
app.use(userPage_Router);
app.use(news_Router);
app.use(developer_Router);
app.use(street_Router);
app.use(photo_Router);
app.use(search_Router);

//设置服务器端口
app.listen(8000,function(){
    console.log('----- server on -----');
});
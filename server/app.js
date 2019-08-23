var express=require('express');
var path=require('path');

var app=express();

//设置静态文件夹
app.use('/node_modules/',express.static(path.join(__dirname,'../node_modules/')));

var router = require('./router');
app.use(router);

//设置服务器端口
app.listen(8000,function(){
    console.log('----- server on -----');
});
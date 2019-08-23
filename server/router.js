var express=require('express');
var router=express.Router();
var file = require('./file.js');

router.get('/',(req,res)=>{
    // file.chapterDetail('../books/猛卒/崆峒山共48章/第一章 选道大会.json').then((data)=>{
    //     res.status(200).json(data);
    // })
    // file.chapterList('../books/时空长河的旅者').then((data)=>{
    //     res.status(200).json(data);
    // })
    file.bookIfo('时空长河的旅者').then((data)=>{
        res.status(200).json(data);
    })
})

router.get('/book',(req,res)=>{
    let data = {
        title:'盗墓笔记'
    };
    res.type('text/javascript');
    res.send(`${req.query.callback}(${JSON.stringify(data)})`);
})

router.get('/chapter/detail',(req,res)=>{
    let callback = req.query.callback;
    let path = `../books/盗墓笔记/${req.query.volume}/${req.query.chapter}.json`;
    let bookId = req.query.bookId;
    new Promise((resolve,reject)=>{
        var detail = {};
        fs.readFile(path,(err,data)=>{
            if(err){
                console.log(err)
            }else{
                detail.content =JSON.parse(data);
                detail.title = '七星鲁王 第四章 尸洞';
                resolve(detail)
            }
        })
    }).then((detail)=>{
        res.type('text/javascript');
        res.send(`${req.query.callback}(${JSON.stringify(detail)})`);
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports=router;
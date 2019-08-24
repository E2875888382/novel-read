var express=require('express');
var router=express.Router();
var file = require('./file.js');

router.get('/chapterDetail',(req,res)=>{
    let book = req.query.book;
    let volume = req.query.volume;
    let chapter = req.query.chapter;
    file.chapterDetail(`../books/${book}/${volume}/${chapter}`).then((data)=>{
        res.type('text/javascript');
        res.status(200).send(`${req.query.callback}(${data})`);
    })
})

router.get('/chapterList',(req,res)=>{
    let book = req.query.book;
    file.chapterList(`../books/${book}`).then((data)=>{
        res.type('text/javascript');
        res.status(200).send(`${req.query.callback}(${JSON.stringify(data)})`);
    })
})

router.get('/bookIfo',(req,res)=>{
    let book = req.query.book;
    file.bookIfo(book).then((data)=>{
        res.type('text/javascript');
        res.status(200).send(`${req.query.callback}(${data})`);
    })
})

router.get('/bookIfoTotal',(req,res)=>{
    file.bookIfoTotal().then((data)=>{
        res.type('text/javascript');
        res.status(200).send(`${req.query.callback}([${data}])`);
    })
})

module.exports=router;
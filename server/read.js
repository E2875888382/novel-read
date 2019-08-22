var express=require('express');
var router=express.Router();
var fs = require('fs');

var book = {
    title:'盗墓笔记',
    author:'南派三叔',
    score:4.5,
    class:['悬疑','探险生存'],
    words:'143.07万字|完本',
    cover:'https://bookcover.yuewen.com/qdbimg/349573/68223/180',
    intro:'热播剧《怒海潜沙》原著小说。50年前由长沙土夫子（盗墓贼）出土的战国帛书，记载了一个奇特战国古墓的位置，50年后，其中一个土夫子的孙子在他的笔记中发现这个秘密，纠集了一批经验丰富的盗墓贼前去寻宝，谁也没有想到，这个古墓竟然有着这么多诡异的事情：七星疑棺，青眼狐尸，九头蛇柏。这神秘的墓主人到底是谁，他们到底能不能找到真正的棺椁？故事悬念重重，情节跌荡，值得一看。',
    volume:['七星鲁王','怒海潜沙'],
}


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
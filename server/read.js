var express=require('express');
var router=express.Router();

router.get('/book',(req,res)=>{
    let callback = req.query.callback;
    let data = {
        title:'盗墓笔记'
    };
    res.type('text/javascript');
    res.send(`${callback}(${JSON.stringify(data)})`);
})





module.exports=router;
const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


app.get('/build',function(req,res){
    let url = req.query.url;
    new Promise((resolve,reject)=>{
        request(url,(err,res,body)=>{
            if(!err&&res.statusCode == 200){
                var $ = cheerio.load(body);
                var book = {
                    title:$('.book-info h1 em').text().trim(),
                    author:$('.book-info h1 span a').text().trim(),
                    score:$('#j_bookScore').text(),
                    class:[],
                    words:0,
                    cover:'https:'+$('#bookImg img').attr('src'),
                    intro:$('.book-intro').text(),
                }
                $('.tag a').each(function(){
                    book.class.push($(this).text());
                })
                $('.count cite').each(function(){
                    book.words += Number($(this).text());
                })
                fs.writeFileSync(`./ifo/${book.title}.json`,JSON.stringify(book),(err)=>{
                    if (err) throw err;
                })
                resolve(url)
            }
        })
    }).then((url)=>{
        return  new Promise((resolve,reject)=>{
            var chapter = [];
            request(url,(err,res,body)=>{
                if(!err&&res.statusCode == 200){
                    var $ = cheerio.load(body);
                    var name = $('.book-info h1 em').text().trim();
                    fs.mkdir(`./books/${name}`,(err)=>{
                        if(err) throw err;
                        $('.volume h3').each(function(){
                            var sub = $(this).clone().children().remove().end().text().trim();
                            fs.mkdir(`./books/${name}/${sub}`,(err)=>{
                                if(err) throw err;
                            })
                            chapter.push(`./${name}/${sub}`)
                        })
                        resolve(url)
                    })
                }
            })
        })
    })
    .then((url)=>{
        return new Promise((resolve,reject)=>{
            request(url,(err,res,body)=>{
                if(!err&&res.statusCode == 200){
                    var $ = cheerio.load(body);
                    var s = [];
                    $('.volume').each(function(){
                        var chapter = [];
                        $(this).children('ul').children('li').children('a').each(function(){
                            var temp = {
                                path:'./books/'+$('.book-info h1 em').text().trim()+'/'+ $(this).parent('li').parent('ul').siblings('h3').clone().children().remove().end().text().trim(),
                                href:'https:'+$(this).attr('href')
                            }
                            chapter.push(temp);
                        })
                        s.push(chapter);
                    })
                    resolve(s)
                }
            })
        })
    })
    .then((s)=>{
        return new Promise((resolve)=>{
            var n = Array.prototype.concat.apply([], s);
            n.forEach(function(e){
                var path = e.path;
                var href = e.href;
                request(href,(err,res,body)=>{
                    if(!err&&res.statusCode == 200){
                        var $ = cheerio.load(body);
                        var content = [];
                        $('.read-content p').each(function(){
                            content.push($(this).text());
                        })
                        var name = $('.content-wrap').text().trim()+'.json';
                        fs.writeFileSync(`${path}/`+name,JSON.stringify(content),(err)=>{
                            if (err) throw err;
                        })
                    }
                })
            })
            resolve()
        })
    })
    .then(()=>{
        console.log('获取内容成功')
        res.status(200).json({msg:'获取内容成功'})
    })
    .catch((err)=>{
        throw err;
    })
})

app.listen(4000,()=>{
    console.log('server on')
})
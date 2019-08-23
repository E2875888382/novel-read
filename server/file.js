const fs = require('fs');


module.exports = {
    // 读取章节详情
    chapterDetail:(path)=>{
        return new Promise((resolve,reject)=>{
            fs.readFile(path,'utf-8',(err,data)=>{
                if(err){
                    console.log(err)
                }
                resolve(data)
            })
        })
    },
    // 读取目录
    chapterList:async (path)=>{
        const files = await new Promise((resolve, reject) => {
            fs.readdir(path, (err, files) => {
                if (err) {
                    console.log(err);
                }
                resolve(files);
            });
        });
        return new Promise((resolve) => {
            var result = {};
            files.forEach(function (item) {
                result[item] = fs.readdirSync(`${path}/${item}`);
            });
            resolve(result);
        });
    },
    // 查看单本书籍信息
    bookIfo:(book)=>{
        return new Promise((resolve,reject)=>{
            let path = `../ifo/${book}.json`
            fs.readFile(path,'utf-8',(err,data)=>{
                if(err){
                    console.log(err)
                }
                resolve(data)
            })
        })
    },
    // 查看所有书籍信息
    bookIfoTotal:async ()=>{
        const files = await new Promise((resolve, reject) => {
            fs.readdir('../ifo', (err, files) => {
                if (err) {
                    console.log(err);
                }
                resolve(files);
            });
        });
        return new Promise((resolve) => {
            var result = [];
            files.forEach(function (item) {
                result.push(fs.readFileSync(`../ifo/${item}`, 'utf-8'));
            });
            resolve(result);
        });
    }
}








 
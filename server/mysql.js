const mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'12345',
    port: '3306', 
    database:'videos',
    multipleStatements: true // 支持执行多条 sql 语句
})

module.exports = function(sql,callback){
    pool.getConnection((error,connection)=>{
        if(error){
            throw error;
        }else{
            connection.query(sql,(error,result) => {
                if (error){
                    throw error;
                }
                connection.release();
                callback(result);
            });
        }
    })
}


 
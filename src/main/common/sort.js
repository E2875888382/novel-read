var Nzh = require("nzh");
var nzhcn = Nzh.cn; 
function ext(str){
    if((str.indexOf('第')!==-1)&&(str.indexOf('章')!==-1)){
        let from = str.indexOf('第');
        let to = str.indexOf('章');
        var newstr = str.substring(from+1,to);
        return newstr;
    }else if(str.indexOf('：')!==-1){
        return str.substring(-1,str.indexOf('：'));
    }else{
        return str;
    }
}

function change(a){
    var temp = {};
    var reg = /^[0-9]*$/;
    for(var i = 0 ;i<a.length;i++ ){
        var t = a[i];
        a[i] = ext(a[i]);
        if(!reg.test(a[i])){
            a[i] = nzhcn.decodeS(a[i]);
        }
        temp[a[i]] = t;
    }
    return temp;
}

function sort(obj){
    var result = [];
    Object.keys(obj).forEach(function(key){
        result.push(obj[key])
    })
    return result;
}

exports.install = function(Vue){
    Vue.prototype.resort = function(arr){
        return sort(change(arr));
    }
}


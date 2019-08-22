exports.install = function(Vue,options){
    // 封装jsonp
    // 参数：method：方法
    //      data：params对象
    Vue.prototype.jsp = function(method,data){
        const baseUrl = 'http://192.168.191.1:8000/';
        let url = `${baseUrl}${method}?`;
        for(let item in data){
            url += `&${item}=${data[item]}`;
        }
        return this.$jsonp(url);
    };
}
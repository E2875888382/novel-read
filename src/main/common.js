import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000';

exports.install = function(Vue,options){
    // 封装get方法
    Vue.prototype.get = function(url,params){
        return new Promise((resolve,reject)=>{
            axios({
                method:'get',
                url:url,
                params:params,
                withCredentials: true,
            }).then((result)=>{
                resolve(result);
            },(err)=>{
                throw err;
            })
        })
    };
    // 封装post方法
    Vue.prototype.post = function(url,data){
        return new Promise((resolve,reject)=>{
            axios({
                method:'post',
                url:url,
                data:data,
                withCredentials: true,
            }).then((result)=>{
                resolve(result);
            },(err)=>{
                throw err;
            })
        })
    }
    // 查询收藏的相簿
    Vue.prototype.getPhotoCollection = function(){
        this.get('getPhotoCollection').then((result)=>{
            if(result.data.code == 200){
                this.$store.commit('getPhotoCollection',result.data.photoCollection);
            }
        })
    };
    // 查询收藏的帖子
    Vue.prototype.getStreetCollection = function(){
        this.get('getStreetCollection').then((result)=>{
            if(result.data.code == 200){
                this.$store.commit('getStreetCollection',result.data.streetCollection);
            }
        })
    };
    // 查询好友列表
    Vue.prototype.getFriends = function(){
        this.get("getFriends").then( (result) =>{
            this.$store.commit('getFriends',result.data);
        }) 
    };
    // 查询用户信息
    Vue.prototype.getLoginUserIfo = function(){
        this.get('getLoginUserInfo').then( (result) =>{
            if(result.data[0]){
                this.$store.commit('userIfo',result.data[0]);
            }
        })
    };
    // 查询好友信息
    Vue.prototype.getFriendsMessage = function(){
        this.get("getFriendsMessage").then( (result) =>{
            this.$store.commit('getMessage',result.data);
            if(result.data.length>0){
                this.$store.commit('getMessageCount',result.data.length);
            }else{
                this.$store.commit('getMessageCount',0);
            }
        })
    };
    // 查询已读好友信息
    Vue.prototype.getHistoryMessage = function(){
        this.get("getHistoryFriendsMessage").then( (result) =>{
            this.$store.commit('getHistoryMessage',result.data);
        })
    };
    // 退出登录
    Vue.prototype.logOut = function(){
        this.get('logOut').then((result) => {
            if(result.data.code == 700){
                this.$store.commit('userStatus',false);
                this.$router.push({ path:'/'});//重定向到首页
            }else{
                console.log(result.data);
            }
        })
    };
}
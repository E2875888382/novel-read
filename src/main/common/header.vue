<template>
<div>
    <van-popup v-model="show" position="left" :style="{height:'100%',width:'80%'}">
        <p class="myBook col-12">我的书架</p>
        <van-card v-for="(item,index) in bookshelf" :key="index" @click="read(item.title)">
            <h5 slot="title">{{ item.title }}</h5>
            <p slot="desc">{{ item.author }}</p>
            <van-image slot="thumb" style=" height:100px;width:80px" :src="item.cover" fit="fill"></van-image>
            <div slot="footer">
                <van-button type="danger" size="small" @click="removeFromBookshelf(item.title)">移出书架</van-button>
            </div>
        </van-card>
    </van-popup>
    <van-sticky>
        <div class="row col-12" style="background-color:white">
            <van-icon name="ellipsis" class="col-2 user_icon" @click="checkBookshelf"/>
            <van-search placeholder="请输入搜索关键词" v-model="search" class="col-10" right-icon="search" left-icon=""/>
        </div>
    </van-sticky>
</div>
</template>

<script>
export default {
    data(){
        return {
            show : false,
            search:'',
            bookshelf:[],
        }
    },
    mounted(){

    },
    methods:{
        read(title){
            this.$router.push({name:'read',params:{name:title}});
            this.show = false;
        },
        removeFromBookshelf(title){
            localStorage.removeItem(title);
            this.checkBookshelf();
            this.show = true;
        },
        checkBookshelf(){
            this.show = !this.show;
                var len = localStorage.length;  // 获取长度
                var arr = []; // 定义数据集
                for(var i = 0; i < len; i++) {
                    // 获取key 索引从0开始
                    var getKey = localStorage.key(i);
                    // 获取key对应的值
                    var getVal = localStorage.getItem(getKey);
                    // 放进数组
                    if(getVal[0] =='{'){
                        arr.push(JSON.parse(getVal));
                    }
                }
                this.bookshelf = arr;
        }
    }
}
</script>

<style scoped>
.myBook{
    text-align: center;
    margin:20px 0;
}
.user_icon{
    display: flex;
    justify-content:center;
    align-items: center;
}
.row{
    margin:0;
}
.van-image{
    box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
}
.van-card{
    padding:15px;
    background-color: whitesmoke;
}
.van-card__header{
    height:70px;
}
.van-card__thumb{
    width:80px;
    height:100px;
    margin-right:10px;
}
</style>


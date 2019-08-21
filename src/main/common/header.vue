<template>
<div>
    <van-popup v-model="show" position="left" :style="{height:'100%',width:'80%'}">
        <p class="myBook col-12">我的书架</p>
        <van-card v-for="(item,index) in myBook" :key="index">
            <h5 slot="title">{{ item.name }}</h5>
            <p slot="desc">{{ item.author }}</p>
            <el-image slot="thumb" style=" height:100px;width:80px" :src="item.cover" fit="fill"></el-image>
            <div slot="footer">
                <van-button type="danger" size="small">移出书架</van-button>
            </div>
        </van-card>
    </van-popup>
    <van-sticky>
        <div class="row col-12" style="background-color:white">
            <van-icon name="ellipsis" class="col-2 user_icon" @click="show = !show"/>
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
            myBook:[
                {
                    name:'盗墓笔记',
                    author:'南派三叔',
                    cover:'https://bookcover.yuewen.com/qdbimg/349573/68223/180',
                    rate:4.5,
                },
                {
                    name:'藏海花',
                    author:'南派三叔',
                    cover:'https://bookcover.yuewen.com/qdbimg/349573/3480121/150',
                    rate:4.5,
                }
            ]
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
.el-image{
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


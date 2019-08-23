<template>
<div class="bg">
    <div class="col-12 top">
        <van-icon name="arrow-left" @click="back"/><p>{{ book.title }}</p>
    </div>
    <div class="col-12 ifo_box">
        <van-card>
            <h5 slot="title">{{ book.title }}</h5>
            <p slot="desc">{{ book.author }}</p>
            <div slot="tags">
                <van-rate v-model="book.score" allow-half :readonly="true"/>
                <van-tag plain type="danger" v-for="(item,index) in book.class" :key="index">{{item}}</van-tag>
                <p>{{ book.words }}字</p>
            </div>
            <van-image slot="thumb" width="120" height="160" :src="book.cover"/>
            <div slot="footer">
                <van-button type="danger" size="small">加入书架</van-button>
            </div>
        </van-card>
    </div>
    <div class="col-12 desc">
        <div class="content">
            <p>{{ book.intro }}</p>
        </div>
        <div class="row col-12">
            <p class="col-11 dir">目录</p>
            <router-link v-if="book.title" :to="{name:'chapter',params:{ name:book.title }}">
                <van-icon name="arrow"/>
            </router-link>
        </div>
    </div>
    <div class="bottom col-12"></div>
</div>
</template>

<script>
export default {
    data(){
        return {
            book:{},
            current:this.$route.params.name,
        }
    },
    mounted(){
        this.bookIfo();
    },
    methods:{
        bookIfo(){
            this.jsp('bookIfo',{book:this.current}).then((data)=>{
                this.book = data;
                this.book.score = Number(this.book.score);
            })
        },
        back(){
            this.$router.push({path:'/'});
        },
    }
}
</script>

<style scoped>
.row{
    margin:0;
    align-items:center;
}
.top{
    display: flex;
    align-items:center;
}
.top p{
    margin:10px 0;
    padding-left:20px;
}
.ifo_box,.bg{
    background-color: whitesmoke;
}
.ifo_box p{
    margin:8px 0;
    font-size:14px;
    line-height: 24px;
}
.ifo_box h5{
    margin:0;
    font-weight:800;
}
.van-card{
    padding:15px;
    background-color: whitesmoke;
}
.van-card__header{
    height:160px;
}
.van-card__thumb{
    width:120px;
    height:160px;
    margin-right:15px;
}
.ifo_box>>>img{
    box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
}
.desc{
    margin-bottom:10px;
    background-color: #fff;
}
.van-tag{
    margin-top:5px;
}
.content{
    min-height:100px;
    border-bottom:1px solid whitesmoke;
    padding-top:20px;
    font-size:14px;
    line-height:1.8em;
    text-indent:2em;
}
.bottom{
    background-color: #f5f7fa;
    height:5px;
}
.dir{
    margin:0;
    line-height: 39px;
    font-size:15px;
    font-weight:800;
}
</style>

<template>
<div class="bg">
    <div class="col-12 top">
        <van-icon name="arrow-left" @click="back"/><p>盗墓笔记</p>
    </div>
    <div class="col-12 ifo_box">
        <van-card>
            <h5 slot="title">盗墓笔记</h5>
            <p slot="desc">南派三叔</p>
            <div slot="tags">
                <van-rate v-model="book.rate" allow-half :readonly="true"/>
                <p>悬疑/探险生存</p>
                <p>143.07万字|完本</p>
            </div>
            <el-image slot="thumb" style=" height:160px;width:120px" :src="book.cover" fit="fill"></el-image>
            <div slot="footer">
                <van-button type="danger" size="small">加入书架</van-button>
            </div>
        </van-card>
    </div>
    <div class="col-12 desc">
        <div class="content">
            <p>
                热播剧《怒海潜沙》原著小说。50年前由长沙土夫子（盗墓贼）出土的战国帛书，记载了一个奇特战国古墓的位置，50年后，其中一个土夫子的孙子在他的笔记中发现这个秘密，纠集了一批经验丰富的盗墓贼前去寻宝，谁也没有想到，这个古墓竟然有着这么多诡异的事情：七星疑棺，青眼狐尸，九头蛇柏。这神秘的墓主人到底是谁，他们到底能不能找到真正的棺椁？故事悬念重重，情节跌荡，值得一看。
            </p>
        </div>
        <div class="row col-12">
            <p class="col-11 dir">目录</p>
            <van-icon name="arrow" @click="dir()"/>
        </div>
    </div>
    <div class="bottom col-12"></div>
</div>
</template>

<script>
export default {
    data(){
        return {
            book:{
                cover:'https://bookcover.yuewen.com/qdbimg/349573/68223/180',
                rate:4.5,
            }
        }
    },
    methods:{
        back(){
            this.$router.push({path:'/'});
        },
        dir(){
            this.$router.push({path:'/book/dir'});
        }
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
    margin:5px 0;
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
.el-image{
    box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
}
.desc{
    margin-bottom:10px;
    background-color: #fff;
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

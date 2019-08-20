<template>
<div class="bg">
    <div class="col-12">
        <el-carousel :interval="3000" type="card" height="150px" indicator-position="none">
            <el-carousel-item v-for="item in images" :key="item" class="carousel_item">
                     <el-image
                        style=" height: 124px;width:93px"
                        :src="item"
                        fit="fill"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div style="background-color:white;margin-bottom:20px">
        <div class="col-12 topic_bar">
            <h5 class="topic col-9">小说推荐</h5>
            <span class="col-3 more"><router-link to="/recommended">更多</router-link><van-icon name="arrow" /></span>
        </div>
        <van-grid :column-num="3" :border="false">
            <van-grid-item v-for="(item,index) in support" :key="index">
                <el-image style=" height:110px;width:95px" :src="item.cover" fit="fill"></el-image>
                <span class="bookName">{{ item.name }}</span>
            </van-grid-item>
        </van-grid>
    </div>
    <div style="background-color:white;margin-bottom:20px">
        <div class="col-12 topic_bar">
            <h5 class="topic col-9">排行榜</h5>
            <span class="col-3 more"><router-link to="/ranking">更多</router-link><van-icon name="arrow" /></span>
        </div>
        <div class="col-12">
            <van-tabs type="card" style="padding:0;">
                <van-tab title="热销榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in support" :key="index" class="swipe_item">
                            <el-image style="height:110px;width:95px" :src="item.cover" fit="fill"></el-image>
                            <span class="bookName">{{ item.name }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
                <van-tab title="风云榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in support" :key="index" class="swipe_item">
                            <el-image style="height:110px;width:95px" :src="item.cover" fit="fill"></el-image>
                            <span class="bookName">{{ item.name }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
                <van-tab title="签约榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in support" :key="index" class="swipe_item">
                            <el-image style="height:110px;width:95px" :src="item.cover" fit="fill"></el-image>
                            <span class="bookName">{{ item.name }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
                <van-tab title="推荐榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in support" :key="index" class="swipe_item">
                            <el-image style="height:110px;width:95px" :src="item.cover" fit="fill"></el-image>
                            <span class="bookName">{{ item.name }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
            </van-tabs>
        </div>
    </div>
    <div style="background-color:white;margin-bottom:20px">
        <div class="col-12 topic_bar">
            <h5 class="topic col-9">畅销完本</h5>
            <span class="col-3 more"><router-link to="/hot">更多</router-link><van-icon name="arrow" /></span>
        </div>
        <div class="col-12">
            <van-card v-for="(item,index) in support" :key="index">
                <p slot="title" class="title">{{ item.name }}</p>
                <p slot="desc" class="desc">是时势造英雄还是英雄造时势？肖恩带着技能面板穿越异界，用实力和手段成就战神领主！</p>
                <div slot="tags" class="ifo">
                    <span class="author"><van-icon name="contact" />唐家三少</span>
                    <div>
                        <van-tag plain>仙侠</van-tag>
                        <van-tag plain type="primary">291.62万字</van-tag>
                    </div>
                </div>
                <el-image slot="thumb" style=" height:110px;width:80px" :src="item.cover" fit="fill"></el-image>
            </van-card>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            images: [
                'https://bookcover.yuewen.com/qdbimg/349573/1016073648/90',
                'https://bookcover.yuewen.com/qdbimg/349573/1010734492/90',
                'https://bookcover.yuewen.com/qdbimg/349573/1015711046/90',
                'https://bookcover.yuewen.com/qdbimg/349573/1011139133/90',
            ],
            support:[
                {cover:'https://bookcover.yuewen.com/qdbimg/349573/1015929450/90',name:'我的眼睛能鉴宝'},
                {cover:'https://bookcover.yuewen.com/qdbimg/349573/1015859383/90',name:'我是篮坛巨星'},
                {cover:'https://bookcover.yuewen.com/qdbimg/349573/1015839132/90',name:'反派驾临'},
                {cover:'https://bookcover.yuewen.com/qdbimg/349573/1013744668/90',name:'谍战最新力作'},
                {cover:'https://bookcover.yuewen.com/qdbimg/349573/1015717336/90',name:'最强赏金猎人'},
                {cover:'https://bookcover.yuewen.com/qdbimg/349573/1015407320/90',name:'大明最后一个狠人'},
            ]
        }
    },
}
</script>

<style scoped>
.row{
    margin:0;
}
.carousel_item{
    display: flex;
    justify-content:center;
    align-items: center;
}
.col-12>>>.van-grid-item__content--center{
    display:flex;
    flex-direction: column ;
    justify-content: flex-start;
}
.bookName{
    line-height: 18px;
    font-size:12px;
}
.topic_bar{
    display: flex;
}
.topic{
    font-size:15px;
    font-weight:600;
    padding:10px 15px 0 15px;
}
.more{
    display: flex;
    line-height:24px;
    font-size:12px;
    justify-content: center;
    align-items:center;
    color:#999;
}
.bg{
    background-color:whitesmoke;
    padding-bottom:1px;
}
.swipe_item{
    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
    padding: 5px 10px;
}
.col-12>>>.van-tabs__wrap {
    margin-bottom:10px;
}
.van-card{
    background-color: #fff;
    border-bottom: 1px solid #f5f7fa;
    height:125px;
}
.ifo{
    display:flex;
    justify-content: space-between;
}
.title{
    font-weight:600;
    font-size:14px;
    margin-bottom:8px;
}
.desc{
    color:#999;
    margin-bottom: 8px;
    font-size:12px;
}
.author{
    color:#999;
    font-size:12px;
    display:flex;
    align-items:center;
}
.el-image{
    box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
}
</style>
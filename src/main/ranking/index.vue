<template>
<div>
    <div class="col-12 top">
        <van-icon name="arrow-left" @click="back"/><p>排行榜</p>
    </div>
    <van-tabs v-model="active" swipeable sticky animated>
        <van-tab title="原创榜" name="原创榜">
            <div class="col-12">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                <van-card v-for="(item,index) in support" :key="index">
                    <div slot="tag"><van-tag plain type="danger">{{ index+1 }}</van-tag></div>
                    <p slot="title" class="title">{{ item.name }}</p>
                    <p slot="desc" class="desc">是时势造英雄还是英雄造时势？肖恩带着技能面板穿越异界，用实力和手段成就战神领主！</p>
                    <div slot="tags" class="ifo">
                        <span class="author"><van-icon name="contact" />唐家三少</span>
                        <div>
                            <van-tag plain>仙侠</van-tag>
                            <van-tag plain type="primary">291.62万字</van-tag>
                        </div>
                    </div>
                    <van-image slot="thumb" style=" height:110px;width:80px" :src="item.cover" fit="fill"></van-image>
                </van-card>
                </van-list>
            </div>
        </van-tab>
        <van-tab title="热销榜" name="热销榜">
            <div class="col-12">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                <van-card v-for="(item,index) in support" :key="index">
                    <div slot="tag"><van-tag plain type="danger">{{ index+1 }}</van-tag></div>
                    <p slot="title" class="title">{{ item.name }}</p>
                    <p slot="desc" class="desc">是时势造英雄还是英雄造时势？肖恩带着技能面板穿越异界，用实力和手段成就战神领主！</p>
                    <div slot="tags" class="ifo">
                        <span class="author"><van-icon name="contact" />唐家三少</span>
                        <div>
                            <van-tag plain>仙侠</van-tag>
                            <van-tag plain type="primary">291.62万字</van-tag>
                        </div>
                    </div>
                    <van-image slot="thumb" style=" height:110px;width:80px" :src="item.cover" fit="fill"></van-image>
                </van-card>
                </van-list>
            </div>
        </van-tab>
        <van-tab title="推荐榜" name="推荐榜">
            <div class="col-12">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                <van-card v-for="(item,index) in support" :key="index">
                    <div slot="tag"><van-tag plain type="danger">{{ index+1 }}</van-tag></div>
                    <p slot="title" class="title">{{ item.name }}</p>
                    <p slot="desc" class="desc">是时势造英雄还是英雄造时势？肖恩带着技能面板穿越异界，用实力和手段成就战神领主！</p>
                    <div slot="tags" class="ifo">
                        <span class="author"><van-icon name="contact" />唐家三少</span>
                        <div>
                            <van-tag plain>仙侠</van-tag>
                            <van-tag plain type="primary">291.62万字</van-tag>
                        </div>
                    </div>
                    <van-image slot="thumb" style=" height:110px;width:80px" :src="item.cover" fit="fill"></van-image>
                </van-card>
                </van-list>
            </div>
        </van-tab>
        <van-tab title="收藏榜" name="收藏榜">
            <div class="col-12">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                <van-card v-for="(item,index) in support" :key="index">
                    <div slot="tag"><van-tag plain type="danger">{{ index+1 }}</van-tag></div>
                    <p slot="title" class="title">{{ item.name }}</p>
                    <p slot="desc" class="desc">是时势造英雄还是英雄造时势？肖恩带着技能面板穿越异界，用实力和手段成就战神领主！</p>
                    <div slot="tags" class="ifo">
                        <span class="author"><van-icon name="contact" />唐家三少</span>
                        <div>
                            <van-tag plain>仙侠</van-tag>
                            <van-tag plain type="primary">291.62万字</van-tag>
                        </div>
                    </div>
                    <van-image slot="thumb" style=" height:110px;width:80px" :src="item.cover" fit="fill"></van-image>
                </van-card>
                </van-list>
            </div>
        </van-tab>
        <van-tab title="新书榜" name="新书榜">
            <div class="col-12">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                <van-card v-for="(item,index) in support" :key="index">
                    <div slot="tag"><van-tag plain type="danger">{{ index+1 }}</van-tag></div>
                    <p slot="title" class="title">{{ item.name }}</p>
                    <p slot="desc" class="desc">是时势造英雄还是英雄造时势？肖恩带着技能面板穿越异界，用实力和手段成就战神领主！</p>
                    <div slot="tags" class="ifo">
                        <span class="author"><van-icon name="contact" />唐家三少</span>
                        <div>
                            <van-tag plain>仙侠</van-tag>
                            <van-tag plain type="primary">291.62万字</van-tag>
                        </div>
                    </div>
                    <van-image slot="thumb" style=" height:110px;width:80px" :src="item.cover" fit="fill"></van-image>
                </van-card>
                </van-list>
            </div>
        </van-tab>
        <van-tab title="作家榜" name="作家榜">
            <div class="col-12">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                <van-card v-for="(item,index) in support" :key="index">
                    <div slot="tag"><van-tag plain type="danger">{{ index+1 }}</van-tag></div>
                    <p slot="title" class="title">{{ item.name }}</p>
                    <p slot="desc" class="desc">是时势造英雄还是英雄造时势？肖恩带着技能面板穿越异界，用实力和手段成就战神领主！</p>
                    <div slot="tags" class="ifo">
                        <span class="author"><van-icon name="contact" />唐家三少</span>
                        <div>
                            <van-tag plain>仙侠</van-tag>
                            <van-tag plain type="primary">291.62万字</van-tag>
                        </div>
                    </div>
                    <van-image slot="thumb" style=" height:110px;width:80px" :src="item.cover" fit="fill"></van-image>
                </van-card>
                </van-list>
            </div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
export default {
    data(){
        return {
            loading: false,
            finished: false,
            active:'',
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
    methods:{
        back(){
            this.$router.push({path:'/'});
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                this.support = this.support.concat(this.support);
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.support.length >= 40) {
                    this.finished = true;
                }
            }, 300);
        }
    }
}
</script>

<style scoped>
.top{
    display: flex;
    align-items:center;
    margin:10px 0 ;
}
.top p{
    margin:0;
    padding-left:20px;
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
.van-image{
    box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
}
</style>


<template>
<div class="bg">
    <van-popup v-model="show" position="left" :style="{ width: '70%',height:'100%' }">
        <div class="col-12 dir">
            <p>目录</p>
        </div>
        <div v-for="(item,key,index) in list" :key="index">
            <p class="sup">{{ key }}</p>
            <div class="col-12">
                <van-list>
                    <van-cell
                        v-for="(i,index) in item"
                        :key="index"
                        :title="i|format"
                        :to="{name:'detail',params:{name:current,volume:key,chapter:i}}"
                    />
                </van-list>
            </div>
        </div>
    </van-popup>
    <van-sticky>
        <p class="col-12 top">{{ chapter|format }}</p>
    </van-sticky>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="释放加载上一章" pulling-text="下拉加载上一章">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
        >
            <div class="content" @click="show = !show">
                <h4 class="col-12">{{ chapter|format }}</h4>
                <p class="col-12" v-for="(text,index) in content" :key="index">{{ text }}</p>
            </div>
        </van-list>
    </van-pull-refresh>
</div>
</template>

<script>
export default {
    data(){
        return {
            current:this.$route.params.name,
            volume:this.$route.params.volume,
            chapter:this.$route.params.chapter,
            show:false,
            loading: false,
            finished: false,
            isLoading: false,
            content:[],
            list:[],
        }
    },
    filters:{
        format:function(value){
            value = value.substr(0,value.length-5);
            return value;
        }
    },
    watch:{
        $route(to,from){
            this.current = this.$route.params.name,
            this.volume = this.$route.params.volume,
            this.chapter = this.$route.params.chapter,
            this.chapterDetail();
        }
    },
    created(){
        this.hiddenHeader();
        this.hiddenFooter();
    },
    mounted(){
        this.chapterDetail();
        this.chapterList();
    },
    destroyed(){
        this.showFooter();
    },
    methods:{
        chapterList(){
            this.jsp('chapterList',{book:this.current}).then((data)=>{
                for(var item in data){
                    data[item] = this.resort(data[item]);
                };
                this.list = data;
            })
        },
        chapterDetail(){
            this.jsp('chapterDetail',{book:this.current,volume:this.volume,chapter:this.chapter}).then((data)=>{
                this.content = data;
            })
        },
        hiddenHeader(){
            this.$store.commit('hiddenHeader',false);
        },
        hiddenFooter(){
            this.$store.commit('hiddenFooter',false);
        },
        showFooter(){
            this.$store.commit('hiddenFooter',true);
        },
        onRefresh() {
            setTimeout(() => {
                for(var item in this.list){
                    this.list[item].forEach((e,index)=>{
                        if(e == this.chapter){
                            if((index-1)>=0){
                                this.$router.push({name:'detail',params:{name:this.current,volume:item,chapter:this.list[item][index-1]}});
                            }else{

                            }
                        }
                    })
                };
                this.isLoading = false;
            }, 500);
        },
        onLoad() {
            setTimeout(()=>{
                window.scrollTo(0,0);
                this.next()
                this.loading = false;
            },1000)
        },
        next(){
            for(var item in this.list){
                this.list[item].forEach((e,index)=>{
                    if(e == this.chapter){
                        if((index+1)<this.list[item].length){
                            this.$router.push({name:'detail',params:{name:this.current,volume:item,chapter:this.list[item][index+1]}});
                        }else{
                            this.finished = true;
                        }
                    }
                })
            };
        }
    }
}
</script>

<style scoped>
.bg{
    background:url('../../img/bg.png') no-repeat;
    background-size: 100% 100%;
    min-height:1000px;
}
.top{
    background:url('../../img/bg.png') no-repeat;
    background-size: 100% 100%;
    height:40px;
    margin:0;
    line-height:40px;
    font-size:12px;
    color:#988153;
}
.content p{
    margin:0;
    font-size:18px;
    line-height: 1.8;
}
.sup{
    background-color: whitesmoke;
    margin:0;
    padding:0 30px;
    font-size:12px;
    line-height:36px;
    color:#999;
}
.dir{
    padding:0;
}
.dir>p{
    text-align: center;
    border-bottom: 1px solid red;
    margin:0;
    font-size:14px;
    line-height:2em;
    color:red;
}
</style>
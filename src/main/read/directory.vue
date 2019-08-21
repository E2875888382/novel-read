<template>
<div>
    <div class="col-12 top">
        <van-icon name="arrow-left" @click="back"/><p>盗墓笔记</p>
    </div>
    <div class="col-12 dir">
        <p>目录</p>
        <div class="row col-12">
            <p class="col-10">共484章</p>
            <span class="col-2">倒序</span>
        </div>
    </div>
    <div>
        <p class="sup">七星鲁王</p>
        <div class="col-12">
            <van-list>
                <van-cell
                    v-for="(item,index) in 30"
                    :key="index"
                    :title="'七星鲁王 第'+item+'章'"
                    to="/book/dir/read"
                />
            </van-list>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        this.hiddenHeader();
    },
    destroyed(){
        this.showHeader();
    },
    methods:{
        hiddenHeader(){
            this.$store.commit('hiddenHeader',false);
        },
        showHeader(){
            this.$store.commit('hiddenHeader',true);
        },
        back(){
            this.$router.push({path:'/book'});
        },
    }
}
</script>

<style scoped>
.row{
    margin:0;
}
.top{
    display: flex;
    align-items:center;
}
.top p{
    margin:10px 0;
    padding-left:20px;
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
.dir .row p{
    margin:0;
    font-weight:800;
    line-height:3em;
    font-size:15px;
}
.dir .row span{
    padding:0;
    line-height:3em;
    font-size:15px;
}
.sup{
    background-color: whitesmoke;
    margin:0;
    padding:0 30px;
    font-size:12px;
    line-height:36px;
    color:#999;
}
</style>
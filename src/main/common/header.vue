<template>
<div>
    <van-popup v-model="show" position="left" :style="{height:'100%',width:'80%'}"></van-popup>
    <div class="row col-12" style="background-color:white">
        <van-icon name="ellipsis" class="col-2 user_icon" @click="show = !show"/>
        <van-search placeholder="请输入搜索关键词" v-model="search" class="col-10" right-icon="search" left-icon=""/>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            show : false,
            search:'',
        }
    }
}
</script>

<style scoped>
.user_icon{
    display: flex;
    justify-content:center;
    align-items: center;
}

</style>


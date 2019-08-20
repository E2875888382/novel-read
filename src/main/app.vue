<template>
<div>
     <transition mode="out-in">
          <router-view></router-view>
     </transition>
     <Foot></Foot>
</div>
</template>

<script>
import Foot from './footer.vue'
export default{
     components:{
          Foot,
     },
}
</script>

<style>
.v-enter,.v-leave-to{
     opacity: 0;
     transform: translate3d(100px,0,100px);
} 
.v-enter-active,.v-leave-active{
     transition: all 0.2s;
}
</style>

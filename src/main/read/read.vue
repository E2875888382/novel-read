<template>
  
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        this.hiddenHeader();
        this.hiddenFooter();
    },
    destroyed(){
        this.showFooter();
    },
    methods:{
        hiddenHeader(){
            this.$store.commit('hiddenHeader',false);
        },
        hiddenFooter(){
            this.$store.commit('hiddenFooter',false);
        },
        showFooter(){
            this.$store.commit('hiddenFooter',true);
        },
        back(){
            this.$router.push({path:'/book/dir'});
        },
    }
}
</script>

<style scoped>

</style>
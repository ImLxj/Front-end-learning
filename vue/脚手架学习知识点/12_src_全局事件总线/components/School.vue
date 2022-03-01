<template>
    <div class="dome">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        
    </div>
</template>

<script>
    
    export default {
        name: 'School',
        data() {
            return {
               name:'北京大学',
               address:'北京'
            }
        },
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('我已经接收到的数据',data);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
        
    }
</script>

<style>
    .dome{
        background-color: red;
    }
</style>
<template>
    <div class="dome">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School',
        data() {
            return {
               name:'北京大学',
               address:'北京'
            }
        },
        mounted(){
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我已经接收到的数据',data);
            // })
            this.pubId = pubsub.subscribe('hello',(magName,data) => {
                console.log('有人发布消息了发布消息的人叫:',data);
            })
        },
        beforeDestroy() {
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        },
        
    }
</script>

<style>
    .dome{
        background-color: red;
    }
</style>
<template>
    <div class="dome">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolName">点我把学校名字给app</button>
    </div>
</template>

<script>
    
    export default {
        name: 'School',
        data() {
            return {
               name:'北京大学22273737',
               address:'北京'
            }
        },
        props:['getSchoolName'],
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        },
    }
</script>

<style>
    .dome{
        background-color: red;
    }
</style>
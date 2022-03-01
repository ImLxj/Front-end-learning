<template>
    <div class="test">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{gander}}</h2>
        <button @click="sendStudentName">点我将学生姓名给学校</button>
    </div>
</template>

<script>

    export default {
        name: 'Student',
        data() {
            return {
               name:'张三',
               gander:'男'
            }
        },
        mounted(){
            console.log('Student',this.$bus);
        },
        methods: {
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
            }
        },
    }
</script>

<style scoped>
    .test{
        background-color: burlywood;
    }
</style>
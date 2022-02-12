<template>
    <div class="test">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{gander}}</h2>
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
    }
</script>

<style scoped>
    .test{
        background-color: burlywood;
    }
</style>
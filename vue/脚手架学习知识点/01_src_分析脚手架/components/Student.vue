<template>
    <div class="dome">
        <h2>学生姓名:{{name}}</h2>
        <h2>学校年龄:{{age}}</h2>    
    </div>
</template>

<script>
    export default {
        name : 'Student',
        data() {
            return {
                name:'张三',
                age:18
            }
        },
    }
</script>

<style>
    .dome{
        background-color: red;
    }
</style>
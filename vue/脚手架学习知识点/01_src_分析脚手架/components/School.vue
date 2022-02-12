<template>
    <div class="dome">
        <h2>学校姓名:{{name}}</h2>
        <h2>学校名称:{{address}}</h2>    
    </div>
</template>

<script>
    export default {
        name : 'School',
        data() {
            return {
                name:'清华大学',
                address:'北京'
            }
        },
    }
</script>

<style>
    .dome{
        background-color: red;
    }
</style>
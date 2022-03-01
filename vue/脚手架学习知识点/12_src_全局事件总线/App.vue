<template>
    <div class="app">
        <h2>{{mag}}</h2>
        <School/>
        <Student/>
    </div>
</template>

<script>
    // 引入school组件
    import Student from './components/Student.vue'
    import School from './components/School.vue';
    
    export default {
        name: 'App',
        components:{Student,School},
        data() {
            return {
                mag:'你好啊',
            }
        }
    }
</script>

<style scoped>
    .app{
        background-color: aquamarine;
    }
</style>
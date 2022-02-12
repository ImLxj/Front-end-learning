<template>
    <div>
        <Student name="张三" gander="女" :age="18"/>
    </div>
</template>

<script>
    // 引入school组件
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        components:{Student},
    }
</script>
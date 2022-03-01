<template>
    <div class="test">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{gander}}</h2>
        <button @click="sendStudentName">点我发送学生名字给app</button>
        <button @click="unbind">解绑hello事件</button>
        <button @click="death">销毁Student实例对象</button>
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
        methods: {
            sendStudentName(){
                // 触发Student组件实例身上的自定义事件
                this.$emit('hello',this.name)
                this.$emit('demo')
            },
            unbind(){
                // this.$off('hello') //解绑一个自定义事件
                // this.$off(['hello','demo'])  //解绑多个自定义事件
                this.$off() //所有的自定义事件
            },
            death(){
                this.$destroy() //销毁了当前的Student实例对象，销毁后所有Student实例的自定义事件全部不奏效了
            }
        },
    }
</script>

<style scoped>
    .test{
        background-color: burlywood;
    }
</style>
<template>
    <div class="app">
        <h2>{{mag}}</h2>
      
        <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 (第一种写法,使用@或v-on) -->
        <Student v-on:hello="getStudentName" @demo="m1" @click.native="show"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 (第二种写法,使用ref)-->
        <!-- <Student ref="student"/> -->
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
                studentName:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log('App收到了学校的名称：',name);
            },
            getStudentName(name){
                console.log("我被调用了",name);
                this.studentName = name
            },
            m1(){
                console.log('dome事件被触发了');
            },
            show(){
                alert('123')
            }
        },
        mounted() {
            // this.$refs.student.$on('hello',this.getStudentName)  //绑定自定义事件
            // this.$refs.student.$once('hello',this.getStudentName) //绑定自定义事件(一次)
        },
    }
</script>

<style scoped>
    .app{
        background-color: aquamarine;
    }
</style>
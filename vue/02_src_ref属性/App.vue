<template>
    <div>
        <h1 ref="title" v-text="mag"></h1>
        <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    // 引入school组件
    import School from './components/School.vue'

    export default {
        name: 'App',
        components:{
            School
        },
        data() {
            return {
                mag:'欢迎'
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title); //真实DOM元素
                console.log(this.$refs.sch); //school组件的vc对象
                console.log(this.$refs.btn);  //真实DOM元素
            }
        },
    }
</script>
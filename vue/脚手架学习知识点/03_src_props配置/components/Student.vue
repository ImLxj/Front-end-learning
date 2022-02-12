<template>
    <div>
        <h1>{{mag}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生年龄:{{myAge+1}}</h2>
        <h2>学生性别:{{gander}}</h2>
        <button @click="updateAge">点我修改年龄</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                mag:'我是一个在校大学生',
                myAge:this.age
            }
        },
        methods: {
            updateAge(){
                this.myAge++
            }
        },
        // props:['name','gander','age'] //简单接收

        // 接收的同时对数据进行类型限制
        /*props:{
            name:String,
            age:Number,
            gander:String
        }*/

        // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String,  //name的类型是字符串
                required:true //name是必要的
            },
            age:{
                type:Number,
                default:80 //默认值
            },
            gander:{
                type:String,
                required:true
            }

        }
    }
</script>
<template>
    <transition name="todo" appear>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
                <span>{{todo.title}}</span>
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        </li>
    </transition>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        // 声明接收todo对象
        props:['todo'],
        methods: {
            // 勾选or取消勾选
            handleCheck(id){
                // 通知App组件将对应的todo对象的done值取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            handleDelete(id){
                if(confirm('确定删除吗?')){
                    // this.deleteTodo(id)
                    // this.$bus.$emit('deleteTodo',id)
                    pubsub.publish('deleteTodo',id)
                }
            }
        },
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover{
        background-color: gray;
    }

    li:hover button{
        display: block;
    }

    .todo-enter-active{
        animation: box 1s;
    }

    .todo-leave-active{
        animation: box 1s reverse;
    }

    @keyframes box {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>
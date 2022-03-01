<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__rubberBand"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow" class="come">你好啊!</h1>
        </transition>
    </div>
</template>

<script>
    import 'animate.css'
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: red;
    }
</style>
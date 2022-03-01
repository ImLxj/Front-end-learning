<template>
    <div class="container">
        <Category title="美食">
            <img src="./assets/1.jpg" alt="">
        </Category>

        <Category title="游戏">
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>

        <Category title="电影">
            <img src="./assets/1.jpg" alt="">
        </Category>
    </div>
</template>

<script>
    // import './assets/css/bootstrap.css'

    import Category from './components/Category.vue'
    export default {
        name: 'App',
        components:{Category},
        data() {
            return {
                foods:['夹饼','火锅','小鸡炖蘑菇','小龙虾'],
                games:['英雄联盟','剑网三','红色警戒','穿越火线'],
                films:['《夏洛特烦恼》','《羞羞的铁拳》',"《疯狂的石头》",'《疯狂外星人》']
            }
        },
    }   
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
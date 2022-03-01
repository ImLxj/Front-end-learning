<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽(挖个坑,等着组件使用着进行填充) -->
        <slot :games="games">默认</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['英雄联盟','剑网三','红色警戒','穿越火线']
            }
        },
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }

    img{
        width: 100%;
    }
</style>
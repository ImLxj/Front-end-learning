<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽(挖个坑,等着组件使用着进行填充) -->
        <slot name="center"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['listData','title']
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
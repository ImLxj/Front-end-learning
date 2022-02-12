export default{
    // 传入参数
    install(Vue){
        console.log("我是插件");
        // 定义全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
    }
}
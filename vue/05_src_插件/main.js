// 引入Vue
import Vue from "vue";
// 因为App
import App from './App.vue'
// 引入插件
import plugins from './plugins'
Vue.config.productionTip = false

// 应用插件
Vue.use(plugins)

new Vue({
    el : "#app",
    render: h => h(App)
})
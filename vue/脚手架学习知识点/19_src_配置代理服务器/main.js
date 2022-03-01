// 引入Vue
import Vue from "vue";
// 因为App
import App from './App.vue'
Vue.config.productionTip = false



new Vue({
    el : "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})
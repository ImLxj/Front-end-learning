export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log("你好啊！！！！");
    },
}

export const mixin2 = {
    data() {
        return {
            x:200,
            y:500
        }
    },
    mounted() {
        console.log("你好啊！！！！");
    },
}
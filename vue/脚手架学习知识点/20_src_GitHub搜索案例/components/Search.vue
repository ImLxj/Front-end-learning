<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        name:'Search',
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchUsers(){
                // 请求前更新List数据
                this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                    //    this.$bus.$emit('updateListData',response.data.items)
                        // 请求成功
                        this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
                    },
                    error => {
                        // console.log('请求失败了',error.message);
                        // 请求失败后
                        this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
                    }
                )
            }
        },
    }
</script>
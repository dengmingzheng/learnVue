<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <router-link to="/home"  replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/' + userId" replace>用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'kobe',age:20,height:1.98}}" replace>档案</router-link>
   <!-- <button @click='homeclick'>首页</button>
    <button @click='aboutclick'>关于</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:1
    }
  },
  // methods:{
  //   homeclick(){
  //     // this.$router.push('/home')
  //     this.$router.replace('/home')
  //   },
  //   aboutclick(){
  //    //this.$router.push('/about')
  //    this.$router.replace('/about')
  //   }
  // }
}
</script>

<style>
.active{
  color: red;
}
</style>

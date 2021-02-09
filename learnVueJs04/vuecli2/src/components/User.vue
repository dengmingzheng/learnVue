<template>
  <div>
    <h2>我是用户页面</h2>
    <p>我是用户页面的内容</p>
    <p>{{userId}}</p>
     <p>{{$route.params.userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      //获取路由中的参数
      userId(){
        return this.$route.params.userId
      }
    }
  }
</script>

<style>
</style>

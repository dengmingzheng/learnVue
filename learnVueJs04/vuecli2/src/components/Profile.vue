<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>名字:{{name}}</p>
    <p>年龄:{{age}}</p>
    <p>身高:{{height}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    computed:{
      name(){
        return this.$route.query.name
      },
      age(){
        return this.$route.query.age
      },
      height(){
        return this.$route.query.height
      }
    }
  }
</script>

<style>
</style>

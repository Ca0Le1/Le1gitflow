<template>
  <div id="app">
    这里是1914 git 测试
<<<<<<< HEAD
    <h4>是路人乙的注册</h4>
=======
    <Login></Login>
>>>>>>> cd018bbde2c9effa46752cdf504f700610ad6946
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from  './components/Login'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

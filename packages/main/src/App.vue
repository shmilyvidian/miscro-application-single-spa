<template>
  <div id="single-vue-app">
    <router-link to="/sub_vue">sub_vue</router-link>
    |
    <router-link to="/sub_react">sub_react</router-link>
       <!-- 子应用容器 -->
    <div id = "microApp">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#single-vue-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

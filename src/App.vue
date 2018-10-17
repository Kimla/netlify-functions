<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style src="normalize.css/normalize.css"></style>
<style>
html,
body {
  height: 100%;
}
body {
  background:linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%);
  background-attachment: fixed;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100%;
}
h1 {
  font-size: 50px;
}
</style>

<template>
  <div id="app">
    <div class="appInner">
      <router-view></router-view>
    </div>
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
  padding: 15px;
}
h1 {
  font-size: 50px;
}
.appInner {
  width: 700px;
  margin: 0 auto;
  max-width: 100%;
  margin-bottom: 15vh;
}
</style>

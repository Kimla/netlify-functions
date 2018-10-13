<template>
  <div id="app">
    <Form/>
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'app',
  components: {
    Form
  }
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
  height: 100%;
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
</style>

<template>
  <div>
    <button @click="send">Click me</button>
    <h1 v-if="message">Server says: {{ message }}</h1>
    <hr>
    <button @click="increase">Increase</button>
    <h1 v-if="points">Points: {{ points }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    message: null,
    points: null,
  }),
  methods: {
    async send() {
      const res = await axios.get('.netlify/functions/hello');
      this.message = res.data;
    },
    async increase() {
      const res = await axios.get('.netlify/functions/increase');
      this.points = res.data.points;
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <button @click="send">Button</button>
    <h1 v-if="message">Server says: {{ message }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    message: null,
  }),
  methods: {
    async send() {
      const res = await axios.get('.netlify/functions/hello');
      this.message = res.data;
    }
  }
}
</script>

<style scoped>

</style>

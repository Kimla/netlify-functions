<template>
  <div>
    <h1>Submits</h1>
    <div class="submits">
      <div
        v-for="submit in submits"
        :key="submit._id"
        class="submit"
      >
        <p>Name: {{ submit.name }}</p>
        <p>Contact: {{ submit.contact }}</p>
        <p>Message: {{ submit.message }}</p>
        <p>Timestamp: {{ submit.timestamp }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    submits: [],
  }),
  created() {
    this.getSubmits();
  },
  methods: {
    async getSubmits() {
      const res = await axios.get('.netlify/functions/get-submits');
      this.submits = res.data.reverse();
    }
  }
}
</script>

<style scoped>
.submit {
  width: 600px;
  margin: 0 auto;
  max-width: 100%;
}
.submit {
  background-color: #fff;
  padding: 15px;
  color: #333;
  margin-bottom: 20px;
  font-size: 22px;
  box-shadow: 0px 1px 15px 3px rgba(0, 0, 0, 0.13);
  cursor: pointer;
}
</style>
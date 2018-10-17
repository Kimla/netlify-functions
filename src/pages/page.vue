<template>
  <div v-if="loaded" class="page">
    <div class="inner">
      <div class="container">
        <h1>{{ heading }}</h1>
        <p class="preamble">{{ preamble }}</p>
        <hr>
        <div class="content">
          <p v-html="text"></p>
        </div>
      </div>
    </div>
    <div v-if="editMode" class="sidebar">
      <h2>Edit page</h2>
      <div class="formRow">
        <label for="heading">Heading</label>
        <input id="heading" name="heading" type="text" v-model="heading">
      </div>
      <div class="formRow">
        <label for="preamble">Preamble</label>
        <textarea id="preamble" name="preamble" v-model="preamble"></textarea>
      </div>
      <div class="formRow">
        <VueTrix v-model="text"/>
      </div>
      <button class="button" @click="save">Save</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueTrix from 'vue-trix';

export default {
  components: {
    VueTrix,
  },
  data: () => ({
    loaded: false,
    heading: '',
    preamble: '',
    text: '',
  }),
  computed: {
    editMode() {
      return this.$route.query.edit;
    }
  },
  mounted() {
    this.getPage();
  },
  methods: {
    async getPage() {
      const res = await axios.get('.netlify/functions/get-page');
      this.heading = res.data.heading;
      this.preamble = res.data.preamble;
      this.text = res.data.text;
      this.loaded = true;
    },
    save() {
      axios.post('.netlify/functions/page', {
        heading: this.heading,
        preamble: this.preamble,
        text: this.text,
      }).then((res) => {
        console.log(res.data);
      });
    },
  }
};
</script>

<style>
.trix-content {
  height: 250px;
}
</style>

<style scoped>
.sidebar {
  padding: 15px 30px;
  text-align: left;
  overflow: hidden;
}
.sidebar h2 {
  text-align: center;
  margin-bottom: 50px;
}
.formRow {
  margin-bottom: 20px;
}
.button {
  border: 0;
  padding: 18px 30px;
  background-color: #7367F0;
  min-width: 160px;
  border-radius: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: 0;
}
label {
  display: inline-block;
  margin-bottom: 4px;
  font-size: 20px;
}
input,
textarea {
  width: 100%;
  padding: 10px 15px;
}
textarea {
  height: 200px;
}
.page {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
p {
  line-height: 1.5;
}
.preamble {
  font-size: 24px;
}
hr {
  border-color: #fff;
  margin: 50px 0;
}
.container {
  width: 1000px;
  margin: 0 auto;
  max-width: 100%;
  padding: 15px;
}
.inner {
  width: 100%;
}
.sidebar {
  width: 600px;
  height: 100vh;
  background: #fff;
  color: #333;
}
</style>

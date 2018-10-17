<template>
  <div class="form wrapper">

    <div
      v-if="step === 1"
    >
      <h1>Whats your name?</h1>
      <form @submit.prevent="next">
        <div class="inputHolder">
          <input
            v-model="name"
            type="text"
            class="input"
            autofocus
          >
        </div>
      </form>
    </div>

    <div
      v-if="step === 2"
    >
      <h1>Who do want to contact?</h1>
      <div class="boxes">
        <div 
          class="box"
          @click="selectBox('henric')"
        >
          Henric Åkesson
        </div>
        <div 
          class="box"
          @click="selectBox('kim')"
        >
          Kim Larsson
        </div>
        <div 
          class="box"
          @click="selectBox('oscar')"
        >
          Oscar Wilhelmsson
        </div>
      </div>
    </div>

    <div
      v-if="step === 3"
    >
      <h1>Message</h1>
      <textarea
        v-model="message"
        class="input textarea"
        autofocus
      ></textarea>
      <button
        type="button"
        class="button"
        @click="submit"
      >
        Send
      </button>
    </div>

    <div
      v-if="step === 4"
    >
      <h1>Thank you! We will contact you shortly!</h1>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    step: 1,
    name: '',
    contact: '',
    message: '',
  }),
  methods: {
    next() {
      if (this.step === 1 && this.name.length > 0) {
        this.step++;
      }
    },
    selectBox(contact) {
      this.contact = contact;
      this.step++;
    },
    submit() {
      axios.post('.netlify/functions/form', {
        name: this.name,
        contact: this.contact,
        message: this.message,
      }).then(() => {
        this.step++;
      });
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 700px;
  margin: 0 auto;
  max-width: 100%;
  margin-bottom: 15vh;
  padding: 15px;
}
.input {
  width: 100%;
  padding: 15px;
  box-shadow: 0px 1px 15px 3px rgba(0, 0, 0, 0.13);
  border: 0;
  outline: 0;
  font-size: 18px;
  color: #333;
}
.boxes {
  width: 600px;
  margin: 0 auto;
  max-width: 100%;
}
.box {
  background-color: #fff;
  padding: 15px;
  color: #333;
  margin-bottom: 20px;
  font-size: 22px;
  box-shadow: 0px 1px 15px 3px rgba(0, 0, 0, 0.13);
  cursor: pointer;
}
.textarea {
  height: 200px;
  margin-bottom: 30px;
}
.button {
  border: 0;
  padding: 18px 30px;
  background-color: #fff;
  box-shadow: 0px 1px 15px 3px rgba(0, 0, 0, 0.13);
  min-width: 160px;
  border-radius: 30px;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: 0;
}
</style>

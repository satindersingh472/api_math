<template>
  <div>
    <button v-on:click="get_random">Click Me</button>
    <h2 v-if="message !== undefined">{{message}}</h2>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    get_random() {
      axios
        .request({
          url: "https://x-math.herokuapp.com/api/random",
        })
        .then((response) => {
          cookies.set(`expression`, response[`data`][`expression`]);
          cookies.set(`answer`,response[`data`][`answer`]);
          this.message = `request successfull going to answer page`;
         setTimeout(() => {
            this.$router.push(`/answer_page`);
         }, 100);
        })
        .catch((error) => {
          this.message = error[`message`];
        });
    },
  },
  data() {
    return {
        message: undefined
    }
  },
};
</script>

<style scoped></style>

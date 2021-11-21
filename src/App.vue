<template>
  <div class="mainPage">
    <v-header ></v-header>
    
    <v-footer></v-footer>
  </div>
</template>

<script>
//import Post from "@/components/Post.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "MainPage",
  components: {   "v-header": Header,
    "v-footer": Footer, },
  data() {
    return {};
  },
  methods: {
    resetLikes: function () {
      this.$store.commit("resetLikes");
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Open Sans", sans-serif;
}
.mainPage {
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
}


</style>
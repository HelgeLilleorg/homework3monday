<template>
  <div class="mainPage">
    <v-header class="headerStyle"></v-header>
    
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

.headerStyle:onclick {
  color: black;


}
.content {
  max-width: 500px;
  margin: 0px;
  margin-top: 27px;
  background: pink;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  line-height: 150%;
  text-align: center;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 10px darkgrey;
}
.resetClass {
  padding-bottom: 25px;
}
button {
  background-color: #555;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 3px 3px 10px -4px #242424;
  cursor: pointer;
}
</style>
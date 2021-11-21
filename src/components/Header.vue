<template>
  <div id="nav" class="header" >
    <router-link to="/contactus" class="headline" active-link="active">Contact Us</router-link> |
    <router-link to="/" exact active-link="active"> Posts </router-link> |
    <router-link to="/about" class="headline" active-link="active">About</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>

* {

  color: pink;
}

.active {
  background-color: grey;
  border-color: grey;
  border-radius: 2px;
  border-spacing: 2px;
  color: pink;
}
.active:onhover {
  color: red;
}

.headline:onclick {
  color: black;
  box-shadow: 6px 6px 10px -4px #242424;
}
.headline:onhover {
  color: red;
}

.header {
    padding: 20px;
    margin: 20px 40px 40px 40px;
    font-size: 24px;
    text-align: center;
    
    
}

header:onhover {
  color: pink;
}
.header:onclick {
  color: pink
}

</style>
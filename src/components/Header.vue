<template>
  <div id="nav" class="header" >
    <router-link to="/contactus" exact active-link="active">Contact Us</router-link> |
    <router-link to="/" exact active-link="active"> Posts </router-link> |
    <router-link to="/about" exact active-link="active">About</router-link>
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

  color: darkgrey;
}

.active {
  background-color: pink;
  border-color: grey;
  color: black;
  padding: 2%;
  border-radius: 2px;
  border-spacing: 2px;
  
    font-size: 24px;
    text-align: center;
    width: auto;
  
}


.header {
    
    margin: 20px 40px 40px 40px;
    font-size: 24px;
    text-align: center;
    width: auto;
    
    
}


</style>
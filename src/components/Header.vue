<template>
    <div id="nav">
      <router-link to="/contactus">Contact Us</router-link> |
      <router-link to="/"> Products </router-link> |

      <router-link to="/about">About</router-link>
    
    <router-view />
    
    </div>
</template>

<script>
   export default{
       name:"Header",

   }
</script>

<style>

</style>
<template>
  <div id="comp-list-one">
    <h1>Post feed</h1>
    <ul>
      <li class="item" v-for="product in productList" :key="product.id">
        <img :src='product.user'>
       
        <span class="datetime"> <b>Date:</b> {{ product.datetime }} </span> <br />
        <span class="content">
          <b></b> {{ product.content }}
        </span>
        <br />
        <img :src='product.image'>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "product_compo_1",
  data: function () {
    return {};
  },
  computed: {
    productList() {
      return this.$store.state.productList;
    },
  },
};
</script>
<style scoped>
.item {
  background: rgb(47, 255, 141);
  margin-bottom: 5px;
  padding: 3px 5px;
}
#comp-list-one {
  background: #ffb1b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  margin-left: 20%;
  margin-right: 20%;
  
  padding: 10px 10px;
  width: 60%;
  border-radius: 4px;
}
#comp-list-one ul {
  padding: 0;
}
#comp-list-one li {
  display: inline-block;
  margin-right: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>

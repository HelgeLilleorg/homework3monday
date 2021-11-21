<template>
  <div>
    <article class="unit" v-for="post in postList" :key="post.id">
      <div class="header-section">
        <div class="header-section-1">
          <div class="site-logo">
            <img class="header-image" :src="post.user" />
          </div>
        </div>
        <div class="header-section-2">
          <time>{{ post.datetime }}</time>
        </div>
      </div>

      <div class="middlepart">
        <img :src="post.image" width="100%" id="postImage" />
        <h5>{{ post.content }}</h5>
      </div>

      <div class="bottom-part">
        <div class="post-like">
          <img
            v-on:click="increaseLikes(post)"
            class="myimage"
            :src="require('@/assets/like1.png')"
            alt="like"
          />
        </div>
        <div class="nrOfLikes">
          <p>{{ post.likes }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Post",
  data: function () {
    return {};
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
  methods: {
    increaseLikes(post) {
      this.$store.commit("increaseLikes", post.id);
    },
  },
};
</script>

<style scoped>
article {
  color: white;
  margin: 0px 40px 40px 40px;
  display: flex;
  background-color: #555;
  flex-direction: column;
  padding: 20px;
  width: auto;
  line-height: 150%;
  text-align: left;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px -5px black;
}

.middlepart {
  padding: 20px;
  width: auto;
  line-height: 150%;
  text-align: left;
  flex-direction: column;
  display: flex;
}

img + h5 {
  text-transform: uppercase;
}
span {
  float: right;
  width: 30px;
  border: 3px solid #73ad21;
}

.bottom-part {
  float: left;
  background-color: #555;
  margin: 0px;
  padding: 0px;
  width: 100%;
}

.post-like {
  display: inline-flex;
  justify-content: center;
  width: 44px;
  margin-top: 10px;
  padding: 4px;
  background-color: #424242;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px -4px #242424;
  transition: all 0.1s linear;
  cursor: pointer;
}

.post-like:hover {
  box-shadow: 6px 6px 10px -4px #242424;
}

.nrOfLikes {
  margin-left: 15px;
  display: inline-flex;
  justify-content: center;
  font-size: 20px;
}

.myimage {
  width: 30px;
}

.header-section {
  background-color: #666;
  text-align: center;
  font-size: 15px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
}

.header-section > div {
  width: calc(100% / 2);
}

.header-section-1 {
  margin-right: auto;
  margin-left: 0;
  text-align: left;
}

.header-section-2 {
  padding-top: 7px;
  text-align: right;
}

.header-image {
  height: 27px;
  float: left;
  padding-top: 5px;
  /*padding-left: 10px;*/
  padding-bottom: 5px;
}
</style>
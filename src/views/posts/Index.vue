<template>
  <div class="posts-index">
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <img :src="post.image" alt="" />
      <p>{{ post.body }}</p>
      <router-link :to="`posts/${post.id}`">More Info</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    axios.get("/posts").then((response) => {
      console.log("posts array", response.data);
      this.posts = response.data;
    });
  },
};
</script>

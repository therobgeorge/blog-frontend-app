<template>
  <div class="posts-show">
    <h2>{{ post.title }}</h2>
    <img :src="post.image" alt="" />
    <p>{{ post.body }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: [],
    };
  },
  created: function () {
    axios.get(`/posts/${this.$route.params.id}`).then((response) => {
      console.log("post object", response.data);
      this.post = response.data;
    });
  },
};
</script>

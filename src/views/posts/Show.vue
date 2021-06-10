<template>
  <div class="posts-show">
    <h2>{{ post.title }}</h2>
    <img :src="post.image" alt="" />
    <p>{{ post.body }}</p>
    <router-link :to="`/posts/${post.id}/edit`">Edit Post</router-link>
    |
    <button v-on:click="destroyPost()">Delte Post</button>
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
  methods: {
    destroyPost: function () {
      if (confirm("Are your sure????")) {
        axios.delete(`posts/${this.post.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/recipes");
        });
      }
    },
  },
};
</script>

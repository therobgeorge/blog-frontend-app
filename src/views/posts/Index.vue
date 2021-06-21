<template>
  <div class="posts-index">
    <input type="text" v-model="searchTerm" list="titles" placeholder="Search" />
    <datalist id="titles">
      <option v-for="post in posts" v-bind:key="post.id">
        {{ post.title }}
      </option>
    </datalist>
    <br />
    <br />
    <button v-on:click="setSortAttribute('title')">Sort by title</button>
    <button v-on:click="setSortAttribute('created_at')">Sort by date</button>

    <div
      is="transition-group"
      appear
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-for="post in filterBy(orderBy(posts, sortAttribute), searchTerm, 'title')" v-bind:key="post.id">
        <router-link :to="`posts/${post.id}`">
          <h2>{{ post.title }}</h2>
        </router-link>
        <img :src="post.image" alt="" />
        <p>{{ post.body }}</p>
        <p>Created: {{ relativeDate(post.created_at) }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import moment from "moment";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      posts: [],
      searchTerm: "",
      sortAttribute: "",
    };
  },
  created: function () {
    axios.get("/posts").then((response) => {
      console.log("posts array", response.data);
      this.posts = response.data;
    });
  },
  methods: {
    relativeDate: function (date) {
      return moment(date).fromNow();
    },
    setSortAttribute: function (attribute) {
      this.sortAttribute = attribute;
    },
  },
};
</script>

<template>
  <div class="posts-new">
    <form v-on:submit.prevent="submit()">
      <h1>New Blog Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <img v-if="status" :src="`http://http.cat/${status}`" alt="" />
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="newPostParams.title" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="newPostParams.image" />
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="newPostParams.body" />
        <br />
        <small class="text-danger">You have {{ 250 - newPostParams.body.length }} characters remaining</small>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<style scoped>
.text-danger {
  color: red;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newPostParams: { body: "" },
      errors: [],
      status: "",
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>

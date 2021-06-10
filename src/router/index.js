import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from "../views/posts/Index.vue";
import PostsNew from "../views/posts/New.vue";
import PostsShow from "../views/posts/Show.vue";
import PostsEdit from "../views/posts/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/signup", 
    name: "signup", 
    component: Signup,
  },
  {
    path: "/login",
    name: "login", 
    component: Login,
  },
  {
    path: "/logout",
    name: "logout", 
    component: Logout
  }, 
  {
    path: "/posts",
    name: "posts-index",
    component: PostsIndex
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostsNew
  },
  {
    path: "/posts/:id",
    name: "posts-show",
    component: PostsShow
  },
  {
    path: "/posts/:id/edit",
    name: "posts-edit",
    component: PostsEdit
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

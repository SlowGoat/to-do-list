import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("@/views/home/index");
const myday = () => import("@/views/myday/index");
const read = () => import("@/views/read/index");
const movie = () => import("@/views/movie/index");

const routes = [
  {
    path: "/",
    redirect: "/home/myday",
  },
  {
    path: "/home",
    name: "home",
    component: home,
    redirect: "/home/myday",
    children: [
      {
        path: "myday",
        name: "myday",
        component: myday,
      },
      {
        path: "read",
        name: "read",
        component: read,
      },
      {
        path: "movie",
        name: "movie",
        component: movie,
      },
    ],
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

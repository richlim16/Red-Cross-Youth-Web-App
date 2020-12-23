import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'

import home from './views/Home.vue'
import docs from './views/docs.vue'
import membership from './views/membershipForm.vue'
import committee from './views/committeeForm.vue'
import index from './views/index.vue'
import login from './views/login.vue'
import masterlist from './views/masterlist.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/docs",
      name: "docs",
      component: docs
    },
    {
      path: "/membershipForm",
      name: "membershipform",
      component: membership
    },
    {
      path: "/committeeForm",
      name: "committeeform",
      component: committee
    },
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/masterlist",
      name: "masterlist",
      component: masterlist
    }

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
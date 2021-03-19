import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'

import home from './views/Home.vue'
import docs from './views/docs.vue'
import membership from './views/membershipForm.vue'
import oldmembership from './views/oldmembershipForm.vue'

import committee from './views/committeeForm.vue'
import index from './views/index.vue'
import login from './views/login.vue'
import masterlist from './views/masterlist.vue'
import adminHome from './views/adminHome.vue'
import adminActivity from './views/adminActivity.vue'
import addCouncil from './views/addCouncil.vue'
// import axios from 'axios';
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
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
      path: "/oldmembershipForm",
      name: "oldmembershipform",
      component: oldmembership
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
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/masterlist",
      name: "masterlist",
      component: masterlist
    },
    {
      path: "/adminHome",
      name: "adminHome",
      component: adminHome
    },
    {
      path: "/adminActivity",
      name: "adminActivity",
      component: adminActivity
    },
    {
      path: "/addCouncil",
      name: "addCouncil",
      component: addCouncil
    }
  ]
})




const store = new Vuex.Store({
  state: {
    userId: null,
    userType: null,
    memFormId: null
  },
  getters: {
    getUserId: state => {
      return state.userId
    },
    getUserType: state => {
      return state.userType
    },
    getMemFormId: state => {
      return state.memFormId
    }
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id
    },
    setUserType(state, type) {
      state.userType = type
    },
    setMemFormId(state, id) {
      state.memFormId = id
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

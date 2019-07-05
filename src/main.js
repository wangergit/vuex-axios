// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
import global_store from './store/global_store'

Vue.config.productionTip = false

const _store = new Vuex.Store({
  state: {

  },
  mutations : {

  },
  actions: {

  },
  getters: {

  },
  modules : {
    /*整体情况*/
    global: {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {},
      getters: {},
      modules: {
        store: global_store
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store : _store,
  components: { App },
  template: '<App/>'
})

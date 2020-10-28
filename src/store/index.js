import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/github'
import scroll from './modules/scroll'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    scroll
  },
  mutations: {
    setItems (state, {resource, items}) {
      state[resource].items = items
    },
    setItem (state, {resource, item}) {
      state[resource].item = item
    },
    addItemToArray (state, {item, index, resource}) {
      Vue.set(state[resource].items, index, item)
    }
  }
})
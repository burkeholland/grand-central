import Vue from 'vue'
import Vuex from 'vuex'
import repos from './modules/repos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    repos
  }
})
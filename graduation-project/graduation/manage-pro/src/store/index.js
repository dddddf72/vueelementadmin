import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    total:'',
    table:'',
    isLoading:false
  },
  mutations: {
    setState(state,value){
      state.data = value.goodsList
      state.table = value.table
    },
    setTotal(state,value){
      state.total = value
    }
  },
  actions: {
  },
  modules: {
  }
})

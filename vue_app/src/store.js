import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged:false,
    left:true,
    right:true,
    user:null
  },
  mutations: {
    set_user(state,data){
      //console.log(state);
      
      state.user = data
    },
    set_logged(state,data){
      //console.log(state);
      
      state.logged = data
    }
  },
  actions: {

  }
})

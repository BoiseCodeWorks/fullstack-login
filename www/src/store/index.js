import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


vue.use(vuex)

var api = axios.create({
  baseURL: 'localhost:3000/api/',
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    
  }
})
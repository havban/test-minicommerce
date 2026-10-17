import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    product:{},
    products:[],
    carts:[],
    shipping:{},
    payment: {}
  },
  mutations: {
    setProduct (state, value) {
      state.product = value
    },
    setProducts (state, value) {
      state.products = value
    }
  },
  actions: {
    getProducts ({ commit }) {
      axios.get("/api/products").then(function (response) {
        commit('setProducts', response.data)
      });
    },
    getProduct ({ commit }, param) {
      axios.get("/api/products/"+ param.id).then(function (response) {
        commit('setProduct', response.data)
      });
    }
  },
  getters: {
    products: state => state.products
  }

})

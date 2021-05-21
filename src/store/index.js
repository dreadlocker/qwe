import Vue from 'vue'
import Vuex from 'vuex'
import { filterAll } from "@/assets/constants.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsInfo: null,
    filteredProducts: null,
    dropdownValue: null,
  },
  mutations: {
    saveProductsInfo (state, productsInfo) {
      state.productsInfo = productsInfo
    },
    saveFilteredProducts (state, productLabel) {
      if (productLabel === undefined || productLabel === filterAll) {
        state.filteredProducts = state.productsInfo
      } else {
        state.filteredProducts = state.productsInfo.filter(product => product.label === productLabel)
      }
    },
    saveDropdownSelect (state, value) {
      state.dropdownValue = value
    },
  },
  actions: {
  },
  modules: {
  }
})

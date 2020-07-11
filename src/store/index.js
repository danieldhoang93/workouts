import Vue from 'vue'
import Vuex from 'vuex'

import workouts from './store-workouts'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      workouts
    },

    strict: process.env.DEV
  })
  return Store
}

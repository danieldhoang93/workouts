import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  workouts: {
    // ID1: {
    //   type: 'Bench',
    //   weight: '135',
    //   reps: '10',
    //   completed: false,
    //   date: ''
    // },
    // ID2: {
    //   type: 'Squat',
    //   weight: '155',
    //   reps: '10',
    //   completed: false,
    //   date: ''
    // }
  }
}

const mutations = {
  updateWorkouts (state, payload) {
    console.log('payload (from mutation): ', payload)
    Object.assign(state.workouts[payload.id], payload.updates)
  },
  deleteWorkout (state, id) {
    Vue.delete(state.workouts, id)
  },
  addWorkout (state, payload) {
    Vue.set(state.workouts, payload.id, payload.workout)
  }
}

const actions = {
  updateWorkouts ({ commit }, payload) {
    console.log('payload workout action', payload)
    commit('updateWorkouts', payload)
  },
  deleteWorkout ({ commit }, id) {
    commit('deleteWorkout', id)
  },
  addWorkout ({ commit }, workout) {
    const workoutId = uid()
    const payload = {
      id: workoutId,
      workout: workout
    }
    commit('addWorkout', payload)
  }
}

const getters = {
  workouts: (state) => {
    return state.workouts
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

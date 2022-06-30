import { createStore } from 'vuex'

export default createStore({
  state: {
    tipInfo: 0,
    totalPerPerson: 0
  },
  mutations: {
    PERSENT_SELECTED(state, percentInfo) {
      const { amount, percent } = percentInfo
      let tip = Math.floor(amount * ( percent / 100 ))
      state.tipInfo =  tip
    },
    PERSENT_PER_PERSON(state, peopleCount) {
      state.totalPerPerson = Math.floor(state.tipInfo / peopleCount) 
    }
  },
})

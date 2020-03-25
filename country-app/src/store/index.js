import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import Constant from '../Constant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentRegion: 'all',
    countries: [
      {
        no: 1,
        name: '미국',
        region: 'america',
      },
      {
        no: 2,
        name: '프랑스',
        region: 'europe',
      },
      {
        no: 3,
        name: '영국',
        region: 'europe',
      },
      {
        no: 4,
        name: '중국',
        region: 'asia',
      },
    ],
  },
  getters: {
    countriesByRegion(state) {
      if (state.currentRegion === 'all') {
        return state.countries
      }
      return state.countries.filter((c) => c.region === state.currentRegion)
    },
    regions(state) {
      let temp = state.countries.map((c) => c.region)
      temp = _.uniq(temp)
      temp.splice(0, 0, 'all')
      return temp
    },
    currentRegion(state) {
      return state.currentRegion
    },
  },
  mutations: {
    [Constant.CHANGE_REGION]: (state, payload) => {
      console.log('change region', payload)
      state.currentRegion = payload.region
    },
  },
  modules: {},
})

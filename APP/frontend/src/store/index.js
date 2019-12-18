import Vue from 'vue'
import Vuex from 'vuex'
import decode from "jwt-decode"
import router from "../router"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuth: false,
    options: [],
    role: null,
  },
  mutations: {
    setUser:(state, user) => state.user = user ,
    setRole: (state, role) => state.role = role,
    setToken: (state, token) => state.token = token,
    setLogged: (state, value) => state.isAuth = value,
    setOptions: (state, role) => {
      console.log(state.role)
      if(role == 'cliente'){
        state.options = [
          {
            name: 'Rutina',
            icon: 'mdi-dumbbell',
            path: '/rutine',
            color: '#1F7087',
            src: require('../assets/1.jpg'),
          },
          {
            name: 'Seguimiento',
            icon: 'mdi-weight-lifter',
            path: '/entrance',
            color: '#952175',
            src: require('../assets/2.jpg'),
          },
          {
            name: 'Calificación',
            icon: 'mdi-account-badge-outline',
            path: '/calification',
            color: '#8e44ad',
            src: require('../assets/3.jpg'),
          },
          {
            name: 'Recomendacion',
            path: '/recomendation',
            icon: 'mdi-chart-line',
            color: '#2c3e50',
            src: require('../assets/4.jpg'),
          }
        ]
      } else {
        state.options = [
          {
            name: 'Cliente',
            icon: 'mdi-account-star',
            path: '/client',
            color: '#27ae60',
            src: require('../assets/5.jpg'),
          },
          {
            icon: 'mdi-calendar',
            color: '#16a085',
            name: 'Calificación',
            path: '/calificaction',
            src: require('../assets/6.jpg')
          },
        ]
      }
    },
  },
  actions: {
    autoLogin ({ commit }) {
      let token = localStorage.getItem('token')
      if (token) {
        commit('setUser', decode(token))
        commit('setLogged', true)
        router.push('/')
      }
    },
    salir ({ commit }) {
      commit('setToken', null)
      commit('setUser', null)
      commit('setLogged', false)
      localStorage.removeItem('token')
      router.go({ path: '/login' })
    }
  },
})

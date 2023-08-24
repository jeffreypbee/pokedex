import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    types: [
      {
        name: 'bug',
        color: '92BC2C',
        icon: 'locust'
      },
      {
        name: 'dark',
        color: '595761',
        icon: 'mask'
      },
      {
        name: 'dragon',
        color: '0C69C8',
        icon: 'dragon'
      },
      {
        name: 'electric',
        color: 'F2D94E',
        icon: 'bolt-lightning'
      },
      {
        name: 'fairy',
        color: 'EE90E6',
        icon: 'wand-sparkles'
      },
      {
        name: 'fighting',
        color: 'D3425F',
        icon: 'hand-fist'
      },
      {
        name: 'fire',
        color: 'FBA54C',
        icon: 'fire'
      },
      {
        name: 'flying',
        color: 'A1BBEC',
        icon: 'feather'
      },
      {
        name: 'ghost',
        color: '5F6DBC',
        icon: 'skull'
      },
      {
        name: 'grass',
        color: '5FBD58',
        icon: 'seedling'
      },
      {
        name: 'ground',
        color: 'DA7C4D',
        icon: 'mound'
      },
      {
        name: 'ice',
        color: '75D0C1',
        icon: 'snowflake'
      },
      {
        name: 'normal',
        color: 'A0A29F',
        icon: 'circle-dot'
      },
      {
        name: 'poison',
        color: 'B763CF',
        icon: 'skull-crossbones'
      },
      {
        name: 'psychic',
        color: 'FA8581',
        icon: 'eye'
      },
      {
        name: 'rock',
        color: 'C9BB8A',
        icon: 'gem'
      },
      {
        name: 'steel',
        color: '5695A3',
        icon: 'gears'
      },
      {
        name: 'water',
        color: '539DDF',
        icon: 'droplet'
      }
    ]
  },
  getters: {
    getType: (state) => (typeName) => {
      return state.types.find(type => {
        return type.name === typeName;
      })
    }
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    }
  }
})

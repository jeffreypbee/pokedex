import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: {
      number: 0,
      name: "",
      generations: [],
      types: [],
      filterTypeAnd: false
    },
    view: {
      sprite: 'official-artwork'
    },
    types: [
      {name:'bug', color: "#92BC2C"}, 
      {name:'dark', color: "#595761"}, 
      {name:'dragon', color: "#0C69C8"}, 
      {name:'electric', color: "#F2D94E"}, 
      {name:'fairy', color: "#EE90E6"}, 
      {name:'fighting', color: "#D3425F"}, 
      {name:'fire', color: "#FBA54C"}, 
      {name:'flying', color: "#A1BBEC"}, 
      {name:'ghost', color: "#5F6DBC"}, 
      {name:'grass', color: "#5FBD58"}, 
      {name:'ground', color: "#DA7C4D"}, 
      {name:'ice', color: "#75D0C1"}, 
      {name:'normal', color: "#A0A29F"}, 
      {name:'poison', color: "#B763CF"}, 
      {name:'psychic', color: "#FA8581"}, 
      {name:'rock', color: "#C9BB8A"}, 
      {name:'steel', color: "#5695A3"}, 
      {name:'water', color: "#539DDF"}
    ],
    generations: [
      {
        gen: 1,
        startsAt: 1,
        endsAt: 151,
      },
      {
        gen: 2,
        startsAt: 152,
        endsAt: 251,
      },
      {
        gen: 3,
        startsAt: 252,
        endsAt: 386,
      },
      {
        gen: 4,
        startsAt: 387,
        endsAt: 493,
      },
      {
        gen: 5,
        startsAt: 494,
        endsAt: 649,
      },
      {
        gen: 6,
        startsAt: 650,
        endsAt: 721,
      },
      {
        gen: 7,
        startsAt: 722,
        endsAt: 809,
      },
      {
        gen: 8,
        startsAt: 810,
        endsAt: 905,
      },
      {
        gen: 9,
        startsAt: 906,
        endsAt: 1010,
      },
    ],
  },
  getters: {
    getTypeColor: (state) => (typeName) => {
      const type = state.types.find((type) => type.name === typeName);
      return type.color;
    }
  },
  mutations: {
    FILTER_BY_NAME(state, name) {
      state.filters.name = name;
    },
    FILTER_BY_NUMBER(state, number) {
      state.filters.number = number;
    },
    FILTER_BY_TYPE(state, type) {
      if (state.filters.types.includes(type)) {
        state.filters.types.splice(state.filters.types.indexOf(type), 1);
      } else {
        state.filters.types.push(type);
      }
    },
    FILTER_BY_GENERATION(state, generation) {
      if (state.filters.generations.includes(generation)) {
        state.filters.generations.pop(state.filters.generations.indexOf(generation), 1);
      } else {
        state.filters.generations.push(generation);
      }
    },
    RESET_TYPE_FILTER(state) {
      state.filters.types = [];
    },
    RESET_GENERATION_FILTER(state) {
      state.filters.generations = [];
    },
    TOGGLE_FILTER_TYPE_AND(state) {
      state.filters.filterTypeAnd = !state.filters.filterTypeAnd;
    },
    SET_VIEW_SPRITE(state, sprite) {
      state.view.sprite = sprite;
    }
  },
  actions: {
  },
  modules: {
  },
  strict: true
})

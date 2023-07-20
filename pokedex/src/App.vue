<template>
  <div id="app">
    <input type="text" placeholder="Pokemon Name" v-model="filters.name" />
    <PokedexView :pokedex="pokedex" :filters="filters" />
  </div>
</template>

<script>
import PokedexView from './components/PokedexView.vue'

export default {
  name: 'App',
  components: {
    PokedexView
  },
  data() {
    return {
      pokedex: [
          {
              name: 'Bulbasaur',
              number: 1,
              types: ['grass', 'poison']
          },
          {
              name: 'Ivysaur',
              number: 2,
              types: ['grass', 'poison']
          },
          {
              name: 'Venusaur',
              number: 3,
              types: ['grass', 'poison']
          },
          {
              name: 'Charmander',
              number: 4,
              types: ['fire']
          },
          {
              name: 'Charmeleon',
              number: 5,
              types: ['fire']
          },
          {
              name: 'Charizard',
              number: 6,
              types: ['fire', 'flying']
          },
          {
              name: 'Squirtle',
              number: 7,
              types: ['water']
          },
          {
              name: 'Wartortle',
              number: 8,
              types: ['water']
          },
          {
              name: 'Blastoise',
              number: 9,
              types: ['water']
          },
          {
            name: 'Caterpie',
            number: 10,
            types: ['bug']
          },
          {
            name: 'Metapod',
            number: 11,
            types: ['bug']
          },
          {
            name: 'Butterfree',
            number: 12,
            types: ['bug', 'flying']
          },
          {
            name: 'Weedle',
            number: 13,
            types: ['bug', 'poison']
          },
          {
            name: 'Kakuna',
            number: 14,
            types: ['bug', 'poison']
          },
          {
            name: 'Beedrill',
            number: 15,
            types: ['bug', 'poison']
          },
          {
            name: 'Pidgey',
            number: 16,
            types: ['normal', 'flying']
          },
          {
            name: 'Pidgeotto',
            number: 17,
            types: ['normal', 'flying']
          },
          {
            name: 'Pidgeot',
            number: 18,
            types: ['normal', 'flying']
          }
      ],
      filters: {
        name: ''
      }
    }
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
}
#app {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>

<template>
  <div id="pokedex-view">
      <PokemonCard v-for="(pokemon, index) in filteredPokedex" v-bind:key="index" :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue'

export default {
    components: { 
        PokemonCard 
    },
    name: 'pokedex-view',
    props: ['pokedex', 'filters'],
    computed: {
        filteredPokedex() {
            let filteredList = this.pokedex;
            if (this.filters.name !== '') {
                filteredList = filteredList.filter((pokemon) => {
                    return pokemon.name.toLowerCase().includes(this.filters.name.toLowerCase());
                })
            }
            return filteredList;
        }
    }
}
</script>

<style>
#pokedex-view {
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
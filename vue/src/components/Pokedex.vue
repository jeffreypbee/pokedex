<template>
  <div>
    <h1>Pokedex</h1>
        <PokemonCard v-for="pokemon in pokedex" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonCard from '../components/PokemonCard.vue'
import pokemonService from '../services/PokemonService.js'

export default {
    components: {
        PokemonCard
    },
  data() {
    return {
      pokedex: []
    }
  },
  created() {
    pokemonService.getAll().then(response => {
      this.pokedex = response.data;
      console.log(this.pokedex);
    });
  }
}
</script>

<style>

</style>
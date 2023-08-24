<template>
  <div>
    <h1>Pokedex</h1>
        <PokemonCardContainer :pokemonlist="pokedex" />
  </div>
</template>

<script>
import PokemonCardContainer from '../components/PokemonCardContainer.vue'
import pokemonService from '../services/PokemonService.js'

export default {
    components: {
        PokemonCardContainer
    },
  data() {
    return {
      pokedex: []
    }
  },
  created() {
    pokemonService.getAll().then(response => {
      this.pokedex = response.data;
    });
  }
}
</script>

<style>

</style>
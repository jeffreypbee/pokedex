<template>
  <div id="pokemon-details-container">
    <PokemonDetails />
  </div>
  
</template>

<script>
import PokemonDetails from '../components/PokemonDetails.vue'
export default {
    components: {
        PokemonDetails
    }
}
</script>

<style>
#pokemon-details-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
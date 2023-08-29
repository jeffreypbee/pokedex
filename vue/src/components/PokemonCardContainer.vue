<template>
  <div class="pokemoncardcontainer">
    <PokemonCard v-for="pokemon in pokemonlist" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonCard from '../components/PokemonCard.vue'
export default {
    props: ['pokemonlist'],
    components: {
        PokemonCard
    }
}
</script>

<style>
.pokemoncardcontainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 10px solid white;
}
</style>
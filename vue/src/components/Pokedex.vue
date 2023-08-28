<template>
  <div>
    <div id="search-form">
      <input type="text" v-model="searchTerm" placeholder="Search" />
    </div>
    <div id="filter-types">
      <TypeFilterButton v-for="type in $store.state.types" :key="`filter-${type.name}`" :type="type" />
    </div>
    
    <PokemonCardContainer :pokemonlist="filteredPokedex" />
  </div>
</template>

<script>
import PokemonCardContainer from '../components/PokemonCardContainer.vue'
import TypeFilterButton from '../components/TypeFIlterButton.vue'
import pokemonService from '../services/PokemonService.js'

export default {
    components: {
        PokemonCardContainer,
        TypeFilterButton
    },
  data() {
    return {
      searchTerm: '',
      pokedex: []
    }
  },
  computed: {
    filteredPokedex() {
      if (this.searchTerm !== '') {
        return this.pokedex.filter(pkmn => {
          return pkmn.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      } else {
        return this.pokedex;
      }      
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
#search-form {
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
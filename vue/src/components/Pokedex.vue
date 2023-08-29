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
      let filteredList = this.pokedex;
      if (this.searchTerm !== '') {
        filteredList = filteredList.filter(pkmn => {
          return pkmn.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      }
      if (this.$store.state.filterTypes) {
        this.$store.state.filterTypes.forEach(type => {
          filteredList = filteredList.filter(pkmn => {
            return pkmn.type1 === type || pkmn.type2 === type;
          });
        });
      }
      return filteredList;      
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
#filter-types {
  display: flex;
  justify-content: center;
}
</style>
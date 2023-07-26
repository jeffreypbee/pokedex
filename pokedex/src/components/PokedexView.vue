<template>
  <div class="pokedex-container">
      <div id="entry-count">{{filteredPokedex.length}} {{filteredPokedex.length == 1 ? 'entry' : 'entries'}}</div>
      <div id="pokedex-view">
      
      <PokemonCard v-for="(pokemon, index) in filteredPokedex" v-bind:key="index" :pokemon="pokemon" :spritetype="view.sprite" />
      </div>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue'

export default {
    components: { 
        PokemonCard 
    },
    name: 'pokedex-view',
    props: ['pokedex', 'view'],
    computed: {
        filteredPokedex() {
            const filters = this.$store.state.filters;
            let filteredList = this.pokedex;
            if (filters.number > 0) {
                filteredList = filteredList.filter((pokemon) => {
                    return pokemon.number == filters.number;
                });
            }
            if (filters.name !== '') {
                filteredList = filteredList.filter((pokemon) => {
                    return pokemon.name.toLowerCase().includes(filters.name.toLowerCase());
                });
            }
            if (filters.generations.length > 0) {
                filteredList = filteredList.filter((pokemon) => {
                    for (let i = 0; i < filters.generations.length; i++) {
                        if (pokemon.number >= filters.generations[i].startsAt && pokemon.number <= filters.generations[i].endsAt) {
                            return true;
                        }
                    }
                });
            }
            if (filters.types.length > 0) {
                if (filters.filterTypeAnd) {
                    filteredList = filteredList.filter((pokemon) => {
                        for (let i = 0; i < filters.types.length; i++) {
                            if (!pokemon.types.includes(filters.types[i])) {
                                return false;
                            }
                        }
                         return true;
                    });
                } else {
                    filteredList = filteredList.filter((pokemon) => {
                        for (let i = 0; i < filters.types.length; i++) {
                            if (pokemon.types.includes(filters.types[i])) {
                                return true;
                            }
                        }
                    });
                }
            }
            return filteredList;
        }
    }
}
</script>

<style>
.pokedex-container {
  grid-area: pokedex;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
}
#pokedex-view {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
#entry-count {
    width: 100%;
    align-self: center;
    text-align: right;
    border-bottom: 1px solid #aaa;
}
</style>
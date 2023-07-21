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
    props: ['pokedex', 'filters', 'view'],
    computed: {
        filteredPokedex() {
            let filteredList = this.pokedex;
            if (this.filters.name !== '') {
                filteredList = filteredList.filter((pokemon) => {
                    return pokemon.name.toLowerCase().includes(this.filters.name.toLowerCase());
                });
            }
            if (this.filters.generations.length > 0) {
                filteredList = filteredList.filter((pokemon) => {
                    for (let i = 0; i < this.filters.generations.length; i++) {
                        if (pokemon.number >= this.filters.generations[i].startsAt && pokemon.number <= this.filters.generations[i].endsAt) {
                            return true;
                        }
                    }
                });
            }
            if (this.filters.types.length > 0) {
                filteredList = filteredList.filter((pokemon) => {
                    for (let i = 0; i < this.filters.types.length; i++) {
                        if (pokemon.types.includes(this.filters.types[i])) {
                            return true;
                        }
                    }
                });
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
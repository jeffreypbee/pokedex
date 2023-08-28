<template>
  <div v-if="dataLoaded" id="pokemon-details">
    <div id="pokemon-details-header" :style="{background: gradientBackground}">
        <h1>{{ pokedexNumber }} {{ pokemon.name }}</h1>
    </div>
    
    <img :src="spriteSrc" alt="">
  </div>
</template>

<script>
import pokemonService from '../services/PokemonService.js'
export default {
    data() {
        return {
            pokemon: {},
            dataLoaded: false
        }
    },
    computed: {
        pokedexNumber() {
        const number = this.pokemon.pokedexNumber;
        if (number < 10) {
          return `000${number}`;
        } else if (number < 100) {
          return `00${number}`;
        } else if (number < 1000) {
          return `0${number}`;
        }
        return number;
      },
      spriteSrc() {
        return `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`
      },
      type1() {
        return this.$store.getters.getType(this.pokemon.type1);
      },
      type2() {
        return this.$store.getters.getType(this.pokemon.type2);
      },
      gradientBackground() {
        if (this.pokemon.type2) {
          return `linear-gradient(to right, #${this.type1.color}, #${this.type2.color})`;
        }
        return `linear-gradient(to right, #${this.type1.color}, #${this.type1.color})`;
      }
    },
    created() {
        pokemonService.getById(this.$route.params.id).then(response => {
            this.pokemon = response.data;
            this.dataLoaded = true;
        });
    }
}
</script>

<style>
#pokemon-details {
    width: 500px;
    border-radius: 20px;
    background-color: white;    
    border: 3px solid white;
    box-shadow: 2px 5px 0px 0px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
}

#pokemon-details-header {
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
</style>
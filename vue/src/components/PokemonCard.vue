<template>
  <div class="pokemon-card" :style="{background: gradientBackground}" @mouseover="hovering = true" @mouseleave="hovering = false" @click="$router.push({name: 'pokemon-details', params: {id: pokemon.id}})">
    <div class="pokemon-card-number">{{ pokedexNumber }}</div>
    
    
    <div class="pokemon-card-sprite-container">
      
      <img :src="spriteSrc" class="pokemon-card-sprite" :class="{hovering : hovering}" />
      <div class="pokemon-card-name">{{ pokemon.name }}</div>
      <div class="pokemon-card-types">
        <font-awesome-icon :icon="`fa-solid fa-${type1.icon}`" :title="type1.name" :style="{color: type1.color}" />
        <font-awesome-icon v-if="pokemon.type2" :icon="`fa-solid fa-${type2.icon}`" :title="type2.name" :style="{color: type2.color}" />
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    props: ['pokemon'],
    data() {
      return {
        hovering: false
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
      type1() {
        return this.$store.getters.getType(this.pokemon.type1);
      },
      type2() {
        return this.$store.getters.getType(this.pokemon.type2);
      },
      spriteSrc() {
        return `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`
      },
      gradientBackground() {
        if (this.pokemon.type2) {
          return `linear-gradient(to right, #${this.type1.color}, #${this.type2.color})`;
        }
        return `linear-gradient(to right, #${this.type1.color}, #${this.type1.color})`;
      }
    }
}
</script>

<style>
.pokemon-card {
  width: 120px;
  margin: 10px;
  border-radius: 20px;
  border: 3px solid white;
  box-shadow: 2px 5px 0px 0px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokemon-card:hover {
  cursor: pointer;
}
.pokemon-card-number {
  width: 100%;
  font-size: .8rem;
  font-weight: 600;
  /* background-color: rgba(255, 255, 255, .5); */
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  border-bottom: 1px solid white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, .4);
}
.pokemon-card-name {
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, .4);
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-top: 1px solid white;
}
.pokemon-card-sprite-container {
  width: 106%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokemon-card-sprite {
  width: 120px;  
  margin: -5px;
  filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, .3));
  transition: all 0.5s;
}
.pokemon-card-types {
  width: 100%;
  padding-top: 3px;
  color: white;
  display: flex;
  justify-content: space-evenly;
}
.hovering {
  scale: 120%;
}
</style>
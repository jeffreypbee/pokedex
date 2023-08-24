<template>
  <div class="pokemon-card" :style="{background: gradientBackground}">
    <div class="pokemon-card-number">{{ pokedexNumber }}</div>
    <div class="pokemon-card-name">{{ pokemon.name }}</div>
    <img :src="spriteSrc" class="pokemon-card-sprite" />
    <div class="pokemon-card-types">
      <font-awesome-icon :icon="`fa-solid fa-${type1.icon}`" :title="type1.name" />
      <font-awesome-icon v-if="pokemon.type2" :icon="`fa-solid fa-${type2.icon}`" :title="type2.name" />
    </div>
  </div>
</template>

<script>
export default {
    props: ['pokemon'],
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
  border-radius: 10px;
  border: 3px solid white;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokemon-card-number {
  width: 100%;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.pokemon-card-sprite {
  width: 100px;
}
.pokemon-card-types {
  width: 100%;
  padding-bottom: 5px;
  color: white;
  display: flex;
  justify-content: space-evenly;
}
</style>
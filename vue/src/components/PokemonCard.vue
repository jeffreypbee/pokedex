<template>
  <div class="pokemon-card">
    <div class="pokemon-card-number">{{ pokedexNumber }}</div>
    <div class="pokemon-card-name">{{ pokemon.name }}</div>
    <img :src="spriteSrc" class="pokemon-card-sprite" />
    <div class="pokemon-card-types">
      <span>{{ pokemon.type1 }}</span>
      <span>{{ pokemon.type2 }}</span>
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
      spriteSrc() {
        return `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`
      }
    }
}
</script>

<style>
.pokemon-card {
  width: 120px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokemon-card-sprite {
  width: 100px;
}
</style>
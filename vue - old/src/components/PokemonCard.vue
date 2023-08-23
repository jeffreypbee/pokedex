<template>
  <div class="pokemon-card" :style="cardBackground">
    <div class="pokedex-number">{{ formattedPokedexNumber }}</div>
    <div class="pokemon-info">
      
      <div class="pokemon-name">{{ pokemon.name }}</div>
      <div v-if="pokemon.formName" class="form-name">{{pokemon.formName}}</div>
      <img
        class="pokemon-image"
        :class="{'image-outline' : this.$store.state.view.sprite != 'artwork', 'my-artwork' : this.$store.state.view.sprite === 'artwork'}"
        :src="fullSpritePath"
        :alt="pokemon.name"
        :title="pokemon.name"
      />
    </div>
    <div class="pokemon-types">
      <div
        class="pokemon-type"
        v-for="(type, index) in pokemon.types"
        :key="index"
      >
        <img
          class="type-icon"
          :src="require('../assets/type_icons/' + type.type.name +'.png')"
          :alt="type.type.name"
          :title="type.type.name"
        />
        {{ type.type.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pokemon-card",
  props: ["pokemon"],
  computed: {
    formattedPokedexNumber() {
      const number = this.pokemon.id;
      if (number < 10) {
        return "000" + number;
      }
      if (number < 100) {
        return "00" + number;
      }
      if (number < 1000) {
        return "0" + number;
      }
      return number;
    },
    cardBackground() {
      const cardBackground = {};
      cardBackground.backgroundColor = "white";
      const color1 = this.$store.getters.getTypeColor(this.pokemon.types[0].type.name);
      if (this.pokemon.types.length === 1) {
        cardBackground.backgroundColor = color1;
      } else if (this.pokemon.types.length === 2) {
        const color2 = this.$store.getters.getTypeColor(this.pokemon.types[1].type.name)
        const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
        cardBackground.background = gradient;
        
      }
      
      return cardBackground;
    },
    fullSpritePath() {
      if (this.$store.state.view.sprite === "official-artwork") {
        return (
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
          this.pokemon.id +
          ".png"
        );
      }
      if (this.$store.state.view.sprite === "home") {
        return (
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" +
          this.pokemon.id +
          ".png"
        );
      }
      if (this.$store.state.view.sprite === "showdown") {
        return (
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/" +
          this.pokemon.id +
          ".gif"
        );
      }
      if (this.$store.state.view.sprite === "artwork") {
        return (
          "/images/my_art/" +
          this.formattedPokedexNumber +
          ".png"
        );
      }
      return "";
    },
  },
};

</script>

<style>
.pokemon-card {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-areas:
    "number"
    "info"
    "types";
  background-color: white;
  margin: 10px;
  border-radius: 15px;
  width: 120px;
  height: 170px;
  border: 2px solid white;
}
.pokemon-card:hover {
  box-shadow: 0 4px 8px 0 rgba(110, 96, 128, 0.3), 0 6px 20px 0 rgba(110, 96, 128, 0.3);
}
.pokemon-info {
  grid-area: info;
  width: 100%;
  margin-top: 5px;
  background: linear-gradient(white, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 5px solid white;
}
.pokedex-number {
  grid-area: number;
  background-color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  font-size: 0.7rem;
  text-align: center;
  vertical-align: text-bottom;
}
.pokemon-name {
  font-size: 0.8rem;
  font-weight: bold;
}
.form-name {
  position: absolute;
  top: 35px;
}
.pokemon-types {
  grid-area: types;
  height: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
}
.pokemon-type {
  display: flex;
  align-items: center;
}
.pokemon-image {
  margin: 0px;
  height: 100px;
  width: 100px;
  margin-top: 5px;
  z-index: 2;
}
.image-outline {
  filter: drop-shadow(1px 0 0 white) drop-shadow(0 1px 0 white)
    drop-shadow(-1px 0 0 white) drop-shadow(0 -1px 0 white);
}
.my-artwork {
  scale: 130%;
}
.pokemon-image:hover {
  scale: 140%;
}
.type-icon {
  height: 15px;
}
</style>
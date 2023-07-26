<template>
  <div class="pokemon-card" :style="cardBackground">
    <div class="pokedex-number">{{ formattedPokedexNumber }}</div>
    <div class="pokemon-info">
      
      <div class="pokemon-name">{{ pokemon.name }}</div>
      <div v-if="pokemon.formName" class="form-name">{{pokemon.formName}}</div>
      <img
        class="pokemon-image"
        :class="{'image-outline' : spritetype != 'artwork', 'my-artwork' : spritetype === 'artwork'}"
        :src="fullSpritePath"
        :alt="pokemon.name"
        :title="pokemon.name"
      />
    </div>
    <div class="pokemon-types">
      <div
        class="pokemon-type"
        v-for="(type, index) in typeObjects"
        :key="index"
      >
        <img
          class="type-icon"
          :src="type.icon"
          :alt="type.name"
          :title="type.name"
        />
        {{ type.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pokemon-card",
  props: ["pokemon", "spritetype"],
  computed: {
    formattedPokedexNumber() {
      const number = this.pokemon.number;
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
    typeObjects() {
      const typeObjects = [];
      this.pokemon.types.forEach((type) => {
        const typeObject = {};
        typeObject.name = type;
        typeObject.color = getTypeColor(type);
        typeObject.icon = require("../assets/type_icons/" + type + ".png");
        typeObjects.push(typeObject);
      });

      return typeObjects;
    },
    cardBackground() {
      const cardBackground = {};
      if (this.typeObjects.length === 1) {
        cardBackground.backgroundColor = this.typeObjects[0].color;
      } else if (this.typeObjects.length === 2) {
        let gradient = `linear-gradient(to right, ${this.typeObjects[0].color}, ${this.typeObjects[1].color})`;
        cardBackground.background = gradient;
      }
      return cardBackground;
    },
    fullSpritePath() {
      if (this.spritetype === "official-artwork") {
        return (
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
          this.pokemon.number +
          ".png"
        );
      }
      if (this.spritetype === "home") {
        return (
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" +
          this.pokemon.number +
          ".png"
        );
      }
      if (this.spritetype === "showdown") {
        return (
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/" +
          this.pokemon.number +
          ".gif"
        );
      }
      if (this.spritetype === "artwork") {
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

function getTypeColor(type) {
  switch (type) {
    case "normal":
      return "#A0A29F";
    case "bug":
      return "#92BC2C";
    case "dark":
      return "#595761";
    case "dragon":
      return "#0C69C8";
    case "electric":
      return "#F2D94E";
    case "fire":
      return "#FBA54C";
    case "fairy":
      return "#EE90E6";
    case "fighting":
      return "#D3425F";
    case "flying":
      return "#A1BBEC";
    case "ghost":
      return "#5F6DBC";
    case "grass":
      return "#5FBD58";
    case "ground":
      return "#DA7C4D";
    case "ice":
      return "#75D0C1";
    case "poison":
      return "#B763CF";
    case "psychic":
      return "#FA8581";
    case "rock":
      return "#C9BB8A";
    case "steel":
      return "#5695A3";
    case "water":
      return "#539DDF";
    default:
      return "#ffffff";
  }
}
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
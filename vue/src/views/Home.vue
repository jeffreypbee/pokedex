<template>
  <div class="home">
    <h1>Home</h1>
    <div class="pokemon-type-pill" style="background-color: #B763CF;">
      <font-awesome-icon icon="fa-solid fa-disease" /> Poison
    </div>
    <div class="pokemon-type-pill" style="background-color: #5695A3;">
      <font-awesome-icon icon="fa-solid fa-gears" /> Steel
    </div>
    <div class="pokemon-type-pill" style="background-color: #539DDF;">
      <font-awesome-icon icon="fa-solid fa-droplet" /> Water
    </div>
    <div class="pokemon-type-pill" style="background-color: #FBA54C;">
      <font-awesome-icon icon="fa-solid fa-fire" /> Fire
    </div>
    <div class="pokemon-type-pill" style="background-color: #75D0C1;">
      <font-awesome-icon icon="fa-solid fa-snowflake" /> Ice
    </div>
    <div class="pokemon-type-pill" style="background-color: #A1BBEC;">
      <font-awesome-icon icon="fa-solid fa-feather" /> Flying
    </div>
    <div class="pokemon-type-pill" style="background-color: #92BC2C;">
      <font-awesome-icon icon="fa-solid fa-locust" /> Bug
    </div>
    <div class="pokemon-type-pill" style="background-color: #595761;">
      <font-awesome-icon icon="fa-solid fa-mask" /> Dark
    </div>
    <div class="pokemon-type-pill" style="background-color: #5FBD58;">
      <font-awesome-icon icon="fa-solid fa-seedling" /> Grass
    </div>
    <div class="pokemon-type-pill" style="background-color: #0C69C8;">
      <font-awesome-icon icon="fa-solid fa-dragon" /> Dragon
    </div>
    <div class="pokemon-type-pill" style="background-color: #EE90E6;">
      <font-awesome-icon icon="fa-solid fa-wand-sparkles" /> Fairy
    </div>
    <div class="pokemon-type-pill" style="background-color: #FA8581;">
      <font-awesome-icon icon="fa-solid fa-eye" /> Psychic
    </div>
    <div class="pokemon-type-pill" style="background-color: #A0A29F;">
      <font-awesome-icon icon="fa-solid fa-circle-dot" /> Normal
    </div>
    <div class="pokemon-type-pill" style="background-color: #5F6DBC;">
      <font-awesome-icon icon="fa-solid fa-skull" /> Ghost
    </div>
    <div class="pokemon-type-pill" style="background-color: #DA7C4D;">
      <font-awesome-icon icon="fa-solid fa-mound" /> Ground
    </div>
    <div class="pokemon-type-pill" style="background-color: #C9BB8A;">
      <font-awesome-icon icon="fa-solid fa-gem" /> Rock
    </div>
    <div class="pokemon-type-pill" style="background-color: #D3425F;">
      <font-awesome-icon icon="fa-solid fa-hand-fist" /> Fighting
    </div>
    <div class="pokemon-type-pill" style="background-color: #F2D94E;">
      <font-awesome-icon icon="fa-solid fa-bolt-lightning" /> Electric
    </div>
    
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.pokemon-type-pill {
  width: 80px;
  border-radius: 20px;
  color: white;
  background-color: gray;
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
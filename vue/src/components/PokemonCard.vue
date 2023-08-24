<template>
  <div class="pokemon-card">
    {{ pokemon.name }}
  </div>
</template>

<script>
export default {
    props: ['pokemon']
}
</script>

<style>
.pokemon-card {
  width: 150px;
  margin: 10px;
  border-radius: 10px;
}
</style>
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
    border-radius: 10px;
}
</style>
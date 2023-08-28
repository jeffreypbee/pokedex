<template>
  <div class="pokemon-type-pill" :style="{backgroundColor: `#${type.color}`}">
      <font-awesome-icon :icon="`fa-solid fa-${type.icon}`" /> {{ type.name }}
  </div>
</template>

<script>
export default {
    props: ['type']
}
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
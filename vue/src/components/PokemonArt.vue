<template>
  <img :src="imageSrc" alt="">
</template>

<script>
export default {
    props: ['pokemonId'],
    computed: {
        imageSrc() {
            return `/pokemon-art/official-art/${this.pokemonId}.png`;
        }
    }
}
</script>

<style>

</style>
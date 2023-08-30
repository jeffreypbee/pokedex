<template>
  <img :src="imageSrc" alt="">
</template>

<script>
export default {
    props: ['pokemonId', 'type'],
    computed: {
        imageSrc() {
            if (this.type === 'official') {
                return `/pokemon-art/official-art/${this.pokemonId}.png`;
            } else if (this.type === 'mine') {
                return `/pokemon-art/my-art/${this.pokemonId}.png`;
            }
            return '';
        }
    }
}
</script>

<style>

</style>
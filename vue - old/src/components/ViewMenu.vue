<template>
  <div class="view-menu">
        <h2>View</h2>
        <select v-model="viewSprite">
          <option value="official-artwork">Official Artwork</option>
          <option value="home">Pokemon Home</option>
          <option value="showdown">Showdown</option>
          <option value="artwork">My Artwork</option>
        </select>
      </div>
</template>

<script>
export default {
    computed: {
        viewSprite: {
            get() {
                return this.$store.state.view.sprite;
            },
            set(value) {
                this.$store.commit('SET_VIEW_SPRITE', value);
            }
        }
    }
}
</script>

<style>

</style>
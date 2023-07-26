<template>
  <div id="menus">
      <div id="menus-container" v-if="displayMenus">
      <FilterMenu />
      <ViewMenu />
      </div>
      <div class="toggle-menus" @click.prevent="displayMenus = !displayMenus">{{displayMenus ? '^' : 'V'}}</div>
    </div>
</template>

<script>
import FilterMenu from './FilterMenu.vue'
import ViewMenu from './ViewMenu.vue'

export default {
    name: 'menus-container',
    components: {
        FilterMenu,
        ViewMenu
    },
    data() {
        return {
            displayMenus: false,
        }
    }
}
</script>

<style>

</style>
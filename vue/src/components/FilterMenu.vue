<template>
  <div id="filter-menu">
        <h2>Filter</h2>
        <div id="filter-name">
          <input type="number" placeholder="Number" id="filter-number" min="1" v-model="filterNumber" />
          <input type="text" placeholder="Name" id="filter-name" v-model="filterName" />
        </div>
        <div id="filter-generation">
        <h3>Generation</h3>
        <p>
          <button @click="$store.commit('RESET_GENERATION_FILTER')" id="all-generations-button" :class="{selected : $store.state.filters.generations.length < 1}">All</button>
          <button v-for="generation in $store.state.generations" :key="generation.gen" @click="$store.commit('FILTER_BY_GENERATION', generation)" :class="{selected : $store.state.filters.generations.includes(generation)}">{{generation.gen}}</button>
        </p>
        </div>
        <div id="filter-type">
        <h3>Type</h3>
        <p>
          <button id="all-types-button" :class="{selected: $store.state.filters.types.length < 1}" @click="$store.commit('RESET_TYPE_FILTER')">All</button>
          <input type="checkbox" id="filter-types-and" @change="$store.commit('TOGGLE_FILTER_TYPE_AND')"><label for="filter-types-and">And</label>
        </p>
        <p>
          <img v-for="(type, index) in $store.state.types" :key="index" :class="{selected : $store.state.filters.types.includes(type.name)}" @click="$store.commit('FILTER_BY_TYPE', type.name)" :alt="type.name" :title="type.name" :src="require('../assets/type_icons/' + type.name +'.png')">
        </p>
        <div>
          <font-awesome-icon v-for="type in $store.state.types" :key="`type-${type.name}`" :icon="['fas', type.icon]" :title="type.name" class="filter-type-icon selected" border fixed-width />
        </div>
        </div>
      </div>
</template>

<script>
export default {
    computed: {
        filterName: {
          get() {
            return this.$store.state.filters.name;
          },
          set(value) {
            this.$store.commit('FILTER_BY_NAME', value);
          }
        },
        filterNumber: {
          get() {
            return this.$store.state.filters.number;
          },
          set(value) {
            this.$store.commit('FILTER_BY_NUMBER', value);
          }
        }
    }
}
</script>

<style>

.filter-type-icon {
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: 5px;
  border-radius: 50%;
  margin: 3px;
}

.filter-type-icon:hover {
  scale: 120%
}

.selected {
  background-color: #aaa;
  color: white;
}

</style>
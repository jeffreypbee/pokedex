<template>
    <font-awesome-icon 
    :icon="`fa-solid fa-${type.icon}`" 
    class="type-filter-button" 
    @click="toggleSelected" 
    :style="selected ? {color: type.color} : {color: 'gray'}" 
    :class="{selected: selected}"
    fixed-width
    />
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
            selected: false
        }
    },
    methods: {
        toggleSelected() {
            this.selected = !this.selected;
            this.$store.commit('TOGGLE_FILTER_TYPE', this.type.name);
        }
    }
}
</script>

<style>
.type-filter-button {
    font-size: 1.5rem;
    margin: 3px;
    color: gray;
    transition: all .3s;
    border-radius: 50%;
    padding: 2px;
}

.type-filter-button:hover {
    cursor: pointer;
    scale: 120%;
}

.type-filter-button.selected{
    background-color: white;
}

</style>
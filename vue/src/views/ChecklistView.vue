<template>
  <div id="checklist-view">
    <div class="checklist-header">
        <font-awesome-icon :icon="`fa-solid fa-${checklist.iconName}`" :style="{color: checklist.color}" class="checklist-overview-icon" fixed-width />
        <div class="checklist-name">{{ checklist.name }}</div>
        
    </div>
    <div>{{ checklist.description }}</div>
    <div id="checklist-pokemon" :style="{background: `linear-gradient(#${checklist.color}99, #${checklist.color}00)`}">
        <PokemonCardContainer :pokemonlist="checklist.pokemon" />
    </div>
    
  </div>
</template>

<script>
import checklistService from '../services/ChecklistService';
import PokemonCardContainer from '../components/PokemonCardContainer.vue'

export default {
    components: {
        PokemonCardContainer
    },
    data() {
        return {
            checklist: {},
            dataLoaded: false
        }
    },
    created() {
        checklistService.getById(this.$route.params.id).then(response => {
            this.checklist = response.data;
            this.dataLoaded = true;
        });
    }
}
</script>

<style>
#checklist-view {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#checklist-name {
    font-size: 1.5rem;
    font-weight: bold;
}

#checklist-pokemon {
    border-radius: 30px;
    width: 90%;
    border: 5px solid white;
}
</style>
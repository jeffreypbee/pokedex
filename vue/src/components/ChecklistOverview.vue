<template>
  <div class="checklist-overview" @click="$router.push({name: 'checklist', params: {id: checklist.id}})">
    <font-awesome-icon :icon="`fa-solid fa-${checklist.iconName}`" :style="{color: checklist.color}" class="checklist-overview-icon" fixed-width />
    <div>
        <div class="checklist-header">        
            <div class="checklist-name">{{ checklist.name }}</div>        
        </div>
        
        <div class="checklist-pkmn-count">
            {{ checklist.pokemon.length }} Pokemon
        </div>
        <div>
            {{ checklist.description }}
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    props: ['checklist']
}
</script>

<style>
.checklist-overview {
    border-radius: 20px;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    box-shadow: 2px 5px 0px 0px rgba(0, 0, 0, .2);
    margin: 5px;
    padding: 5px;
    display: flex;
    cursor: pointer;
}

.checklist-header {
    width: 500px;
    display: flex;
    border-bottom: 1px solid #333;    
}

.checklist-name {
    font-size: 2rem;
    margin: 0px;
    padding-bottom: 0px;
    margin-left: 5px;
    align-self: flex-end;
}

.checklist-overview-icon {
    font-size: 3rem;
    padding: 5px;
    filter: drop-shadow(-1px -1px 0px white) 
        drop-shadow(2px -1px 0px white) 
        drop-shadow(2px 2px 0px white)
        drop-shadow(-1px 2px 0px white)
        drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.2)); 
}

.checklist-pkmn-count {
    color: gray;
    align-self: flex-end;
}
</style>
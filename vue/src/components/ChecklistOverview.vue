<template>
  <div>
    <div class="checklist-header" :style="{backgroundColor: `#${checklist.color}`}">
        <font-awesome-icon :icon="`fa-solid fa-${checklist.iconName}`" :style="{color: checklist.color}" class="checklist-overview-icon" fixed-width />
        <h3>{{ checklist.name }}</h3>
    </div>
    
    <div>
        {{ checklist.description }}
    </div>
  </div>
</template>

<script>
export default {
    props: ['checklist']
}
</script>

<style>
.checklist-header {
    background-color: darkgray;
    color: white;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, .4);
    border-radius: 30px;
    width: 500px;
    display: flex;
    padding: 5px;
    box-shadow: 2px 5px 0px 0px rgba(0, 0, 0, .2);
    border: 3px solid white;
}

.checklist-header h3 {
    font-size: 2rem;
    margin: 0px;
    margin-left: 5px;
    align-self: flex-end;
}

.checklist-overview-icon {
    background-color: white;
    font-size: 2rem;
    border-radius: 50%;
    padding: 5px;
}
</style>
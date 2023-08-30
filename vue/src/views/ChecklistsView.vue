<template>
  <div id="checklist-list">
    My Checklists
    <ChecklistOverview v-for="checklist in checklists" :key="`checklist-${checklist.id}`" :checklist="checklist" />
  </div>
</template>

<script>
import checklistService from '../services/ChecklistService.js'
import ChecklistOverview from '../components/ChecklistOverview.vue'

export default {
    components: {
        ChecklistOverview
    },
    data() {
        return {
            checklists: []
        }
    },
    created() {
        checklistService.getAllForUser(this.$store.state.user.id).then(response => {
            this.checklists = response.data;
        });
    }
}
</script>

<style>
#checklist-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
<template>
  <div>
    <form action="">
        Name: <input type="text" v-model="newChecklist.name">
        Description:
        <textarea name="" id="" cols="30" rows="10" v-model="newChecklist.description"></textarea>
        Icon: 
        Color: <input type="color" v-model="newChecklist.color">
        <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
    props: ['checklist'],
    data() {
        return {
            newChecklist: {}
        }
    }
}
</script>

<style>

</style>
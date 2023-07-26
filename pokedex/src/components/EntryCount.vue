<template>
  <div id="entry-count">{{count}} {{count == 1 ? 'entry' : 'entries'}}</div>
</template>

<script>
export default {
    name: 'entry-count',
    props: ['count']
}
</script>

<style>

</style>
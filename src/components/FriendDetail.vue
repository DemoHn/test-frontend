<template>
  <div class="view">
    <div class="col">
      <span class="label">Name:</span>
      <span class="item">Name</span>
    </div>
    <div class="col">
      <span class="label">E-mail:</span>
      <span class="item">abcd@gmail.com</span>
    </div>
    <div class="col">
      <span class="label">Location:</span>
    </div>
    <map-marker />
  </div>
</template>

<script>
import MapMarker from './MapMarker.vue'
export default {
  components: {
    'map-marker': MapMarker,
  }
}
</script>

<style scoped>
div.view {
  display: flex;
  flex-direction: column;
}
</style>


<template>
  <div class="container">
    <!-- icon column -->
    <div class="col" />
    <!-- text column -->
    <div class="col">
      <span class="text">Loading...</span>
    </div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style scoped>
div.container {
  display: flex;
  flex-direction: column;
}

div.col {
  text-align: center;
}

.text {
  font-size: 13px;
  color: #999;
}
</style>



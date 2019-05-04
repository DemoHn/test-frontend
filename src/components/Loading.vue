<template>
  <div class="container">
    <!-- icon column -->
    <div class="col">
      <img
        :src="loaderImage"
        class="loader-image"
      >
    </div>
    <!-- text column -->
    <div class="col">
      <span class="text">Loading...</span>
    </div>
  </div>  
</template>

<script>
import loaderImage from '../assets/loader.svg';

export default {
  data() {
    return {
      loaderImage
    }
  }  
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

.loader-image {
  width: 40px;
}

.text {
  font-size: 13px;
  color: #999;
}
</style>



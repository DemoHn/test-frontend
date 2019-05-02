<template>
  <div class="view">
    <avatar :source="avatar" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'

export default {
  components: {
    'avatar': Avatar,
  },
  props: {
    avatar: {
      type: String,
      default: null,
      required: false,
    },
    name: {
      type: String,
      required: true,
      default: '',
    }
  }  
}
</script>

<style scoped>
div.view {
  display: flex;
  align-items: center;
}
</style>

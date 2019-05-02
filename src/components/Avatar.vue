<template>
  <div class="avatar-wrapper">
    <div
      class="avatar"
      :style="avatarStyle"
    >
      <img
        :src="source"
        :alt="altText"
        class="avatar-img"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 100,
    },
    source: {
      type: String,
      default: 'http://placehold.it/100x100'
    },
    altText: {
      type: String,
      default: 'avatar'
    }
  },
  computed: {
    avatarStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style scoped>
div.avatar {
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

div.avatar img.avatar-img {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>


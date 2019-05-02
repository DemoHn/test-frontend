<template>
  <div>
    <default-layout title="Name 01">
      <p>Friend Detail {{ id }}</p>
    </default-layout>
  </div>
</template>

<script>
export default {
  computed: {
    id: function() {
      return this.$route.params.id
    }
  }
}
</script>

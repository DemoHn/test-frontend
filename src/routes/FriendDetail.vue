<template>
  <div>
    <default-layout title="Your Friend">
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

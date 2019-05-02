<template>
  <div>
    <default-layout title="All Friends">
      <!-- test avatar -->
      <avatar
        size="80"
        source="http://placehold.it/100x200"
      />
    </default-layout>    
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue';

export default {
  components: {
    'avatar': Avatar
  }
}
</script>

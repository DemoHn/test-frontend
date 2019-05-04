<template>
  <div>
    <default-layout title="Your Friend">
      <p>Friend Detail {{ id }}</p>
    </default-layout>
  </div>
</template>

<script>
import FriendDetail from '../components/FriendDetail'
export default {
  components: {
    'friend-detail': FriendDetail
  },
  computed: {
    id: function() {
      return this.$route.params.id
    }
  }
}
</script>

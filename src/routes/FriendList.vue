<template>
  <div>
    <default-layout title="All Friends">
      <!-- test avatar -->
      <friend-card name="Louis Desautomajeker" />
      <friend-detail 
        name="Louis Desautojajeker"
        email="hello@gmail.com"
        :location="loc"
      />
    </default-layout>    
  </div>
</template>

<script>
import FriendCard from '../components/FriendCard.vue';
import FriendDetail from '../components/FriendDetail.vue';

export default {
  components: {    
    'friend-card': FriendCard,
    'friend-detail': FriendDetail,
  },
  data() {
    return {
      size: 80,
      loc: [1,2]
    }
  }
}
</script>

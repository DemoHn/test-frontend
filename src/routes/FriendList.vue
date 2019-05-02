<template>
  <div>
    <default-layout title="All Friends">
      <!-- test avatar -->
      <avatar
        :size="size"
        source="http://placehold.it/100x200"
      />
      <map-marker />
      <friend-card name="Loz" />
      <friend-detail />
    </default-layout>    
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue';
import MapMarker from '../components/MapMarker.vue';
import FriendCard from '../components/FriendCard.vue';
import FriendDetail from '../components/FriendDetail.vue';

export default {
  components: {
    'avatar': Avatar,
    'map-marker': MapMarker,
    'friend-card': FriendCard,
    'friend-detail': FriendDetail,
  },
  data() {
    return {
      size: 80
    }
  }
}
</script>

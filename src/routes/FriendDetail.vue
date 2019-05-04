<template>
  <div>
    <default-layout
      title="Your Friend"
      :show-back="true"
      back-link="/"
    >
      <div v-if="loading">
        <div class="loading-container">
          <loading />
        </div>
      </div>
      <!-- load friends' detail-->
      <div v-else>
        <friend-detail 
          :avatar="friendDetail.avatar"
          :name="friendDetail.name"
          :email="friendDetail.email"
          :location="friendDetail.location"
        />
      </div>
    </default-layout>
  </div>
</template>

<script>
import FriendDetail from '../components/FriendDetail';
import Loading from '../components/Loading.vue';

import { getFriendByID } from '../services/friends';

export default {
  components: {
    'friend-detail': FriendDetail,
    'loading': Loading
  },  
  data() {
    return {
      loading: true,
      friendDetail: {}
    }
  },
  async mounted() {
    const currentID = this.$route.params.id
    const detail = await getFriendByID(currentID)
    this.friendDetail = detail
    this.loading = false
  }
}
</script>

<style scoped>
.loading-container {
  margin-top: 5rem;
}
</style>
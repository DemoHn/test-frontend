<template>
  <div>
    <default-layout title="All Friends">
      <div v-if="loading">
        <div class="loading-container">
          <loading />
        </div>
      </div>
      <!-- load friends card -->
      <div v-else>
        <router-link
          v-for="friend in friendsList"
          :key="friend.id"
          :to="'detail/' + friend.id"
        >
          <friend-card
            :avatar="friend.avatar"
            :name="friend.name"
          />
        </router-link>
      </div>
    </default-layout>
  </div>
</template>

<script>
import FriendCard from '../components/FriendCard.vue';
import Loading from '../components/Loading.vue';

import { fetchFriends } from '../services/friends';

export default {
  components: {
    'friend-card': FriendCard,
    'loading': Loading,
  },
  data() {
    return {
      loading: true,
      friendsList: []
    }
  },
  async mounted() {    
      const data = await fetchFriends()
      this.friendsList = data
      this.loading = false
  }
}
</script>

<style scoped>
.loading-container {
  margin-top: 5rem;
}
</style>


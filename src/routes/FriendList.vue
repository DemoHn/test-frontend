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
        <friend-card
          v-for="friend in friendsList"
          :key="friend.id"
          :avatar="friend.avatar"
          :name="friend.name"
        />      
      </div>
    </default-layout>
  </div>
</template>

<script>
import FriendCard from '../components/FriendCard.vue';
import Loading from '../components/Loading.vue';

import { fetchFriends } from '../services/friends';

const transformFriendsData = (rawArray) =>
  rawArray.map(item => ({
    id: item._id,
    avatar: item.picture,
    name: `${item.name.first} ${item.name.last}`
  }))

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
    try {
      const { data } = await fetchFriends()
      this.friendsList = transformFriendsData(data)
      this.loading = false
    } catch (error) {
      // TODO: handle errors with modal 
    }
  }
}
</script>

<style scoped>
.loading-container {
  margin-top: 5rem;
}
</style>


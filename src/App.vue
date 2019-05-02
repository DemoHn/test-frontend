<template>
  <div id="app">
    <router-view />    
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import FriendList from './routes/FriendList.vue'
import FriendDetail from './routes/FriendDetail.vue'
const routes = [
  { path: '/', component: FriendList },
  { path: '/detail/:id', component: FriendDetail }
];

const router = new VueRouter({
  routes
})

export default {
  router,
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

#app {
  height: 100vh;  
}
</style>



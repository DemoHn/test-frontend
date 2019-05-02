import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

// init Vue
new Vue({
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import DefaultLayout from './layouts/Default.vue';

Vue.use(VueRouter);
// register components
Vue.component('default-layout', DefaultLayout);

// init Vue
new Vue({
  render: h => h(App),
}).$mount('#app');

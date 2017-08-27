import Vue from 'vue'
import App from './App.vue'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(VueResource);
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  render: h => h(App)
});

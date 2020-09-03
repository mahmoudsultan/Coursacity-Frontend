import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

import { Axios } from './plugins/axios';

Vue.use(Axios, { baseURL: process.env.VUE_APP_API_BASE_URL });

new Vue({
  vuetify,
  router,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount('#app')

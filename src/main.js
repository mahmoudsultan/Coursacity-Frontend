import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

new Vue({
  vuetify,
  router,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount('#app')

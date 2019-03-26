import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// importation des plugins
import "./plugins/axios"
import "./plugins/bootstrap"
import './plugins/app'

// configuration 


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
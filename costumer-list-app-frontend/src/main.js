import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*
new Vue({
  render: h => h(App),
}).$mount('#app')*/

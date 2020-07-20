import Vue from 'vue'
import store from './store/index';
import App from './App.vue'
import "bulma";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')

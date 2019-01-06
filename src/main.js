import Vue from 'vue'
import App from './App.vue'
import ninjas from './components/ninjas.vue';

// Registering the component globally, now we can use ii under the name 'ninjas' in App.vue
// Component sailors is registered locally, only in App.vue
Vue.component('ninjas', ninjas)

new Vue({
  render: h => h(App),
}).$mount('#app')


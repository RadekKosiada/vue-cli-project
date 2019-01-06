import Vue from 'vue'
import App from './App.vue'
import ninjas from './components/ninjas.vue';



new Vue({
  render: h => h(App),
}).$mount('#app')

// Registering the component globally, now we can use ii under the name 'ninjas' in App.vue
// Component 
Vue.component('ninjas', ninjas)
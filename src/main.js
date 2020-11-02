import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from './router'
import vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel';


Vue.use(VueCarousel);
Vue.use(VueMaterial)
Vue.use(vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')

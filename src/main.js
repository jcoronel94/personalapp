import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from './router'
import vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel';
import { BreakpointPlugin } from "vue-breakpoint";
import TrContainer from "@/components/ContainerTransclusion";

Vue.use(BreakpointPlugin, {
  print: { print: true },
  portrait: { orientation: "portrait" },
  mobile: { maxWidth: "600px" },
  mobilePortrait: { maxWidth: "600px", orientation: "portrait" },
  tablet: { minWidth: "601px", maxWidth: "800px" },
  small: { minWidth: "601px" , maxWidth:"960px" },
  medium: { minWidth: "961px" , maxWidth:" 1280px" },
  large: { minWidth: "1281px" , maxWidth:"1920px" },
  xlarge: { minWidth: "1921px" }

});

Vue.use(VueCarousel);
Vue.use(VueMaterial)
Vue.use(vuelidate)
Vue.component('tr-container',TrContainer)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')
   
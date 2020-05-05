import Vue from 'vue'
import App from './App.vue'

import Cloudinary from "cloudinary-vue";

import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)



Vue.use(Cloudinary, {
  configuration: { 
    cloudName: "uw-madison-doit" 
  }
  //             ^ cloudinary configuration options
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

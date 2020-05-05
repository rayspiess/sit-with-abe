import Vue from 'vue'
import App from './App.vue'

import Cloudinary from "cloudinary-vue";

/*
Vue.use(Cloudinary, {
  configuration: { 
    cloudName: "university-of-wisconsin-madison" 
  }
  //             ^ cloudinary configuration options
});
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

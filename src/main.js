import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

/*过滤器*/
Vue.filter('setWH',(url , arg) =>{
    return url.replace(/w\.h/ , arg)
})
Vue.component('Loading',Loading)
Vue.component('Scroller' , Scroller)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

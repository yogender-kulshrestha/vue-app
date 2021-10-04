import Vue from 'vue'
import App from './App.vue'
import VueNoty from 'vuejs-noty'
import VueRouter from 'vue-router'
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin, TablePlugin } from 'bootstrap-vue'
import moment from 'moment'
import dotenv from 'dotenv'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'

dotenv.config()
// require("bootstrap-vue-datatable");

import 'vuejs-noty/dist/vuejs-noty.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueNoty)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(TablePlugin)
// Vue.use(moment)
// Vue.use(jwt)
// Vue.use(bcrypt)

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD, MMM YYYY, hh:mm A')
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import Element from 'element-ui';

import App from './views/login/index.vue';
import router from './router/router';
import store from './store/store';
import './plugins/element.js'


Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

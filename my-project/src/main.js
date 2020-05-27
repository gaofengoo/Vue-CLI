import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// Vue.use(ElementUI, {size:'small', zIndex:'3000'});
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	render: h => h(App)
}).$mount('#app')
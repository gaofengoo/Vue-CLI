import Vue from 'vue';
import ElementUI from 'element-ui';
import VueValidator from 'vue-validator';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueValidator);
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false;

// 定义路由组件
// const Foo = {
// 	template: '<div>foo</div>'
// }
// const Bar = {
// 	template: '<div>bar</div>'
// }
// const routes = [
// 	{
// 		path: '/foo',
// 		component: Foo
// 	}, {
// 		path: '/bar', 
// 		component: Bar
// 	}
// ]
// const router = new VueRouter({
// 	// routes // （缩写）相当于 routes: routes
// 	routes
// })


new Vue({
	el: '#app',
	render: h => h(App)
}).$mount('#app')

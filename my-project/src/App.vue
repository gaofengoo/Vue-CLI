<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<routeShow></routeShow>
		<!-- 路由 -->
		<h1>hello app</h1>
		<p>
			<router-link to="/foo">Go to Foo</router-link>
			<router-link to="/bar">Go to Bar</router-link>
		</p>
		<router-view></router-view>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import routeShow from './components/routeShow.vue'

export default {
	name: 'App',
	components: {
		// HelloWorld
		routeShow
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

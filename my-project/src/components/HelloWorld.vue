<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			For a guide and recipes on how to configure / customize this project,<br>
			check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
			<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
			<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
			<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
			<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
			<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
		</ul>
		<!-- 布局 -->
		<el-row>
			<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
			<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<!-- 按钮 -->
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>

		<el-row>
			<el-button plain>朴素按钮</el-button>
			<el-button type="primary" plain>主要按钮</el-button>
			<el-button type="success" plain>成功按钮</el-button>
			<el-button type="info" plain>信息按钮</el-button>
			<el-button type="warning" plain>警告按钮</el-button>
			<el-button type="danger" plain>危险按钮</el-button>
		</el-row>

		<el-row>
			<el-button round>圆角按钮</el-button>
			<el-button type="primary" round>主要按钮</el-button>
			<el-button type="success" round>成功按钮</el-button>
			<el-button type="info" round>信息按钮</el-button>
			<el-button type="warning" round>警告按钮</el-button>
			<el-button type="danger" round>危险按钮</el-button>
		</el-row>

		<el-row>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="primary" icon="el-icon-edit" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="info" icon="el-icon-message" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
		<!-- 日期 -->
		<div class="block">
			<span class="demonstration">默认</span>
			<el-date-picker
				v-model="value1"
				type="date"
				placeholder="选择日期">
			</el-date-picker>
		</div>
		<div class="block">
			<span class="demonstration">带快捷选项</span>
			<el-date-picker
				v-model="value2"
				align="right"
				type="date"
				placeholder="选择日期"
				:picker-options="pickerOptions">
			</el-date-picker>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data() {
		return {
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now();
				},
				shortcuts: [{
					text: '今天',
					onClick(picker) {
						picker.$emit('pick', new Date());
					}
				}, {
					text: '昨天',
					onClick(picker) {
						const date = new Date();
						date.setTime(date.getTime() - 3600 * 1000 * 24);
						picker.$emit('pick', date);
					}
				}, {
					text: '一周前',
					onClick(picker) {
						const date = new Date();
						date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', date);
					}
				}]
			},
			value1: '',
			value2: ''
		};
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>

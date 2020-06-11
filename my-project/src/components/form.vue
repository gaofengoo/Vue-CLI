<template>
	<div class="hello">
		<form novalidate>
			<div>
				<label for="username">username:</label>
				<input type="text" name="" id="username">
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'validator',
	props: {
		msg: String
	},
	data() {
		return {
			
		};
	}
}
</script>
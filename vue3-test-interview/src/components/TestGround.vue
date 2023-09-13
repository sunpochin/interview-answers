<template>
	<h1>Test Ground</h1>
	<h3 class="test-text">test-text</h3>
	<a
		class="ahref"
		href="https://google.com"
		target="_blank"
		rel="noopener noreferrer"
	>
		Google
	</a>
	<br />
	<hr />

	<div>
		<input type="checkbox" />
		<input type="text" />
	</div>
</template>

<script setup>
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json));
</script>

<style lang="scss" scoped>
.test-text {
	background-color: green;
}

.test-text:hover {
	background-color: red;
}

.test-text:before {
	content: '♥ before content';
	background-color: #ffba10;
}

.test-text:after {
	content: '♥ after content';
	background-color: #ffba10;
}

.ahref {
	font-size: xx-large;
	color: black;
}

.ahref:hover {
	color: red;
}

a:link {
	color: blue;
}

a:visited {
	color: green;
}
</style>

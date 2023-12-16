<script>
	import '../app.css';
	import { onMount } from 'svelte';
	// import { browser } from '$app/env';

	let isphoneWrapper = false;

	// onMount(() => {
	// 	if (window.invokeNative) {
	// 		isphoneWrapper = false;
	// 	} else {
	// 		isphoneWrapper = true;
	// 		document.body.style.visibility = 'visible';
	// 	}
	// });
</script>

<div class:phone-wrapper={isphoneWrapper}>
	<div class="app">
		<slot />
	</div>
</div>

<style>
	.phone-wrapper {
		display: block;
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		margin: auto;

		width: 29rem;
		height: 58.5rem;
	}

	.app {
		height: 100vh;
		width: 100%;
	}
</style>

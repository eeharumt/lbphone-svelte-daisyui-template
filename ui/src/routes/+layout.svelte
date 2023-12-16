<script>
	import '../app.css';
	import { onMount } from 'svelte';
	// import { browser } from '$app/env';

	let isphoneWrapper = false;

	onMount(() => {
		if (window.invokeNative) {
			isphoneWrapper = false;
		} else {
			isphoneWrapper = true;
			document.body.style.visibility = 'visible';
		}
	});
</script>

<div id="app-root">
	<div data-theme="dark">
		<div class:phone-wrapper={isphoneWrapper}>
			<slot />
		</div>
	</div>
</div>

<style>
	.phone-wrapper {
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		margin: auto;

		width: 29rem;
		height: 58.5rem;
	}

	#app-root {
		height: 100vh;
		width: 100%;
	}
</style>

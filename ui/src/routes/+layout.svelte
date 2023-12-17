<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let isphoneWrapper = false;
	let theme = 'light';
	const devMode = !(typeof window !== 'undefined' && window['invokeNative']);

	onMount(() => {
		if (!browser) return;
		if (devMode) {
			document.body.style.visibility = 'visible';
			isphoneWrapper = false;
		} else {
			isphoneWrapper = false;
			window.addEventListener('message', (e) => {
				if (e.data !== 'componentsLoaded') return;
				getSettings().then((settings) => {
					theme = settings.display.theme;
				});
				// onSettingsChange((settings) => {
				// 	theme = settings.display.theme;
				// });
			});
		}
	});
</script>

<div id="app-root">
	<div data-theme={theme} id="app">
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

	#app {
		height: 100vh;
		width: 100%;
	}
</style>

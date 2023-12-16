<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	// import { browser } from '$app/env';

	let isphoneWrapper = false;
	let theme = "dark"
	
	onMount(() => {
		if (window.invokeNative) {
			let { setPopUp, setContextMenu, selectGIF, selectGallery, selectEmoji, fetchNui, sendNotification, getSettings, onSettingsChange, colorPicker, useCamera } = window as any;
			getSettings().then(settings => theme = settings.display.theme);
            onSettingsChange(settings => theme = settings.display.theme);
			isphoneWrapper = false;
		} else {
			isphoneWrapper = true;
			document.body.style.visibility = 'visible';
		}
	});
</script>

<div id="app-root">
	<div data-theme={theme}>
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

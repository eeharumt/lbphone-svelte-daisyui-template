<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { pageIndex } from '$lib/appDataStore';

  let theme = 'light';
  let btm_nav_index = 0;
  const devMode = !(typeof window !== 'undefined' && window['invokeNative']);

  onMount(() => {
    if (!browser) return;
    if (devMode) {
      document.body.style.visibility = 'visible';
    } else {
      window.getSettings().then((settings) => {
        theme = settings.display.theme;
      });
    }
  });
  function setPageIndex(index: number) {
    btm_nav_index = index;
    pageIndex.set(index);
  }
</script>

<div id="theme-root">
  <div id="app-root" data-theme={theme}>
    <div class="navbar bg-primary pt-10">
      <div class="flex-1 px-5">
        <h1 class="text-2xl font-bold text-white">SAMPLE APP Svelte + daisyUI</h1>
      </div>
    </div>
    <div class="pb-24">
      <slot />
    </div>

    <div class="btm-nav h-24 pb-4">
      <button class:active={btm_nav_index === 0} on:click={() => setPageIndex(0)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          />
        </svg>

        <span class="btm-nav-label">TAB1</span>
      </button>
      <button class:active={btm_nav_index === 1} on:click={() => setPageIndex(1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="0.05"
          stroke="currentColor"
          class="w-6 h-6"
          ><path
            fill="currentColor"
            d="M6 19v.5q0 .625-.437 1.063T4.5 21q-.625 0-1.062-.437T3 19.5v-7.15q0-.175.025-.35t.075-.325L4.975 6.35q.2-.6.725-.975T6.875 5h10.25q.65 0 1.175.375t.725.975l1.875 5.325q.05.15.075.325t.025.35v7.15q0 .625-.437 1.063T19.5 21q-.625 0-1.062-.437T18 19.5V19zm-.2-9h12.4l-1.05-3H6.85zM5 12v5zm2.5 4q.625 0 1.063-.437T9 14.5q0-.625-.437-1.062T7.5 13q-.625 0-1.062.438T6 14.5q0 .625.438 1.063T7.5 16m9 0q.625 0 1.063-.437T18 14.5q0-.625-.437-1.062T16.5 13q-.625 0-1.062.438T15 14.5q0 .625.438 1.063T16.5 16M5 17h14v-5H5z"
          /></svg
        >
        <span class="btm-nav-label">TAB2</span>
      </button>
      <button class:active={btm_nav_index === 2} on:click={() => setPageIndex(2)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
          />
        </svg>

        <span class="btm-nav-label">TAB3</span>
      </button>
    </div>
  </div>
</div>

<style>
  #app-root {
    position: relative;
    width: 100%;
    height: 100vh;
    /*上下方向にはみ出した要素ををスクロールさせる*/
    overflow-y: scroll;
    /*スクロールバー非表示（IE・Edge）*/
    -ms-overflow-style: none;
    /*スクロールバー非表示（Firefox）*/
    scrollbar-width: none;
  }
  #app-root::-webkit-scrollbar {
    display: none;
  }
</style>

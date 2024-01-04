<script lang="ts">
  import { pageIndex } from '$lib/appDataStore';
  export let pageindex = 0;
  let count = 0;

  pageIndex.subscribe((v: number) => {
    pageindex = v;
  });
</script>

<div class="container mx-auto transition-none">
  <div class="p-2 space-y-2">
    {#if pageindex === 0}
      <h1 class="text-lg">Page1</h1>
    {:else if pageindex === 1}
      <h1 class="text-lg">Page2</h1>
    {:else if pageindex === 2}
      <h1 class="text-lg">Page3</h1>
      <h2 class="text-lg">Count: {count}</h2>
      <button
        class="btn btn-wide"
        on:click={() => {
          count++;
        }}>Count Up Button</button
      >
    {/if}
  </div>
</div>

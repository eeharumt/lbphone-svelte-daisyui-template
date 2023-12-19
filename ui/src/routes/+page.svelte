<script lang="ts">
	let count = 0;
</script>

<div class="container mx-auto">
	<div class="navbar bg-primary pt-4">
		<div class="flex-1 px-5">
			<h1 class="text-2xl font-bold text-white">TEMPLATE</h1>
		</div>
	</div>
	<div class="flex justify-center items-center pt-5">
		<button class="btn btn-primary btn-wide text-white" on:click={() => count++}>CountUP</button>
	</div>
	<div class="flex justify-center items-center text-lg pb-20">
		Count: {count}
	</div>
</div>

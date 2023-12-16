<script lang="ts">
    let count = 0;

</script>
<div class="pt-10 px-5 space-y-2">
	<div class="flex justify-center items-center">
        <h1 class="text-3xl font-bold underline">SampleApp</h1>
    </div>
    <div class="flex justify-center items-center">
        <button class="btn btn-primary btn-wide" on:click={() => count++}>カウントアップ</button>
    </div>
    <div class="flex justify-center items-center text-lg">
        押した回数: {count}
    </div>
</div>

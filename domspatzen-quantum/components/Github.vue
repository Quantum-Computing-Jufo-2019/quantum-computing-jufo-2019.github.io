<template>
	<div class="download">
		<a class="download_a" v-bind:href="href" target="_blank" rel="noreferrer">
			<img class="download_icon" alt="Download" src="~/assets/github.png">
			<p class="download_text">{{ content }}</p>
		</a>
	</div>
</template>
<script>
	export default {
		props: ['content', 'href'],
	}
</script>
<style>

</style>

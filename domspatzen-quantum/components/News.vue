<template>
	<div class="news">
		<img class="news_icon" alt="" src="~/assets/share.svg">
		<a class="news_text" target="_blank" rel="noreferrer" v-bind:href="href">{{ content }}</a>
	</div>
</template>
<script>
	export default {
		props: ['content', 'href'],
	}
</script>
<style>

</style>

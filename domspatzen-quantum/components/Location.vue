<template>
	<div class="location">
		<img class="location_icon" alt="" src="~/assets/location.svg">
		<p class="location_text">{{ content }}</p>
	</div>
</template>
<script>
	export default {
		props: ['content'],
	}
</script>
<style>

</style>

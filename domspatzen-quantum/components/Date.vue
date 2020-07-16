<template>
	<div class="date">
		<img class="date_icon" alt="" src="~/assets/calendar.svg">
		<p class="date_text">{{ content }}</p>
	</div>
</template>
<script>
	export default {
		props: ['content'],
	}
</script>
<style>

</style>

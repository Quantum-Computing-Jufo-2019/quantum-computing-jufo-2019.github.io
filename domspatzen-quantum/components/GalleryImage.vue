<template>
	<img
		loading="lazy"
		v-bind:src="'pictures/' + src"
		v-bind:alt="alt"
		class="picture"
		v-bind:data-id="id"
		v-bind:data-source="source"
		v-on:click="$parent.$emit('zoomPicture', id)"
	>
</template>
<script>
	export default {
		props: ['id', 'src', 'alt', 'source'],
	}
</script>
<style>
	.picture{
		height: 400px;
	}
	#zoomed_image{
		position: fixed;
		z-index: 2001;
	}
	.picture:not(:last-child){
		margin-right: 7px;
	}
</style>

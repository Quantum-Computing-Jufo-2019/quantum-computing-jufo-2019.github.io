<template>
	<picture
		v-bind:alt="alt"
		class="picture"
		v-bind:data-id="id"
		v-bind:data-source="source"
		v-bind:data-jpg-src="require('~/assets/pictures/' + src)"
		v-bind:data-webp-src="require('~/assets/pictures/' + this.src + '?webp')"
		v-on:click="$parent.$emit('zoomPicture', id)"
	>
		<source :srcSet="require('~/assets/pictures/' + this.src + '?webp')" type="image/webp" />
		<source :srcSet="require('~/assets/pictures/' + this.src + '?resize&sizes[]=200&sizes[]=300&sizes[]=600&sizes[]=700&sizes[]=800&sizes[]=850').srcSet" type="image/jpg" />
		<img :src="require('~/assets/pictures/' + src)" />
	</picture>
</template>
<script>
	export default {
		props: ['id', 'src', 'alt', 'source'],
	}
</script>
<style>
	.picture, .picture img {
		height: 400px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
	}
	#zoomed_image {
		position: fixed;
		z-index: 2001;
	}
	.picture:not(:last-child) {
		margin-right: 7px;
	}
</style>

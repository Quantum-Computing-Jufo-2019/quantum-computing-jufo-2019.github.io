<template>
	<picture
		:alt="alt"
		class="picture"
		:data-id="id"
		:data-source="source"
		:data-jpg-src="require('~/assets/pictures/' + src)"
		:data-webp-src="require('~/assets/pictures/' + this.src + '?webp')"
		@click="$parent.$emit('zoomPicture', id)"
	>
		<source :srcSet="require('~/assets/pictures/' + this.src + '?format=webp&resize&sizes[]=200&sizes[]=300&sizes[]=600&sizes[]=700&sizes[]=800&sizes[]=850').srcSet" type="image/webp">
		<source :srcSet="require('~/assets/pictures/' + this.src + '?format=jpg&resize&sizes[]=200&sizes[]=300&sizes[]=600&sizes[]=700&sizes[]=800&sizes[]=850').srcSet" type="image/jpg">
		<img :src="require('~/assets/pictures/' + src)">
	</picture>
</template>
<script>
export default {
	props: [ 'id', 'src', 'alt', 'source', ],
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

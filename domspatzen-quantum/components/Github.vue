<template>
	<div class="download">
		<a class="download_a" :href="href" target="_blank" rel="noreferrer">
			<picture>
				<source :srcSet="require('~/assets/github.png?webp')" type="image/webp">
				<source :srcSet="require('~/assets/github.png?original')" type="image/png">
				<img class="download_icon" alt="Download" :src="require('~/assets/github.png?lqip')">
			</picture>
			<p class="download_text">{{ content }}</p>
		</a>
	</div>
</template>
<script>
export default {
	props: {
		content: {
			type: String,
			default: '',
		},
		href: {
			type: String,
			default: '',
		},
	},
};
</script>

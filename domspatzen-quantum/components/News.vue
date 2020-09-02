<template>
	<div class="news">
		<img class="news_icon" alt="" src="~/assets/share.svg">
		<a class="news_text" target="_blank" rel="noreferrer" :href="href">{{ content }}</a>
	</div>
</template>
<script>
export default {
	props: {
		content: {
			type: String,
			default: "",
		},
		href: {
			type: String,
			default: "",
		},
	},
};
</script>
<style>
	.news {
		width: fit-content;
		margin: auto;
	}
  .news_icon {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
	.news_text {
		vertical-align: super;
		color: white;
		text-decoration: none;
		font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
		font-size: x-large;
	}
	@media (pointer:none), (pointer:coarse) {
		.news_text{
			font-size: x-large;
		}
		.news_icon {
				display: none;
		}
		.news {
				width: 100%;
				text-align: center;
		}
		.news_container {
				width: 100%;
		}
	}
</style>

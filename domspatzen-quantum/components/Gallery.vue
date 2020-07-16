<template>
	<div class="gallery" data-current_id="1">
		<div class="gallery_control_container">
			<img class="gallery_control" alt="" data-control-direction="back" src="~/assets/arrow_back.svg">
		</div>
		<div class="picture_container">
			<slot></slot>
		</div>
		<div class="gallery_control_container">
			<img class="gallery_control" alt="" data-control-direction="forward" src="~/assets/arrow_forward.svg">
		</div>
	</div>
</template>
<script>
	export default {
		props: [],
	}
</script>
<style>
	.gallery{
		width: 90%;
		display: flex;
		flex-flow: row;
		flex-wrap: nowrap;
		margin: auto;
		margin-bottom: 5px;
	}
	.gallery_control_container{
		width: 10%;
		vertical-align: middle;
		display: flex;
	}
	.gallery_control{
		width: 100%;
	}
	.picture_container{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		width: 80%;
		overflow-y: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.picture_container::-webkit-scrollbar {
			width: 0;
			height: 0;
	}
</style>

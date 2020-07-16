<template>
	<div class="gallery">
		<div class="gallery_control_container">
			<img class="gallery_control" alt="" v-on:click="scroll(-1)" src="~/assets/arrow_back.svg">
		</div>
		<div class="picture_container">
			<slot></slot>
		</div>
		<div class="gallery_control_container">
			<img class="gallery_control" alt="" v-on:click="scroll(1)" src="~/assets/arrow_forward.svg">
		</div>
	</div>
</template>
<script>
	export default {
		props: [],
		mounted: function() {
			this.$on('fullscreenPicture', function (id) {
				console.log('fullscreenPicture', id);
			});
		},
		data: function() {
			return {
				activeId: 1,
			};
		},
		methods: {
			scroll: function(direction){
			  let picture_container = $(this.$el).children()[1];
			  let pictures = picture_container.childNodes;

			  let new_current_id = this.activeId + direction;

			  let new_current_picture = undefined;
			  for(let i= 0; i < pictures.length; i++){
			    if($(pictures[i]).attr("data-id") == new_current_id){
			      new_current_picture = pictures[i];
			    }
			  }

			  if(new_current_picture){
			    let offset = 0;
			    $(picture_container).scrollTo(new_current_picture,500,{offset: offset});
					this.activeId = new_current_id;
			  }
			}
		},
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

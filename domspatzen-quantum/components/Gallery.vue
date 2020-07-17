<template>
	<div class="gallery">
		<div class="zoom_blur_background" v-on:click="closeZoom"></div>
		<img class="zoomed_image" alt="" v-on:click="closeZoom">
		<span class="zoomed_image_source"></span>
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
			this.$on('zoomPicture', function (id) {
				var picture;
				var picture_container = $(this.$el).find(".picture_container")[0];
				console.log(picture_container);
				var pictures = picture_container.childNodes;

				for(let i= 0; i < pictures.length; i++){
					if($(pictures[i]).attr("data-id") == id){
						picture = pictures[i];
					}
				}

			  $(this.$el).addClass("zoom");

			  var pos = $(picture).offset();
			  var src = $(picture).attr("src");
			  var height = $(picture).height();
			  var width = $(picture).width();

				console.log(src);

				var zoomedImage = $(this.$el).find(".zoomed_image");
				zoomedImage.show();

			  function setToOrgiginalPos(pos, src, width, height){
			    return new Promise(function(resolve, reject) {
						console.log(pos);
			      zoomedImage.attr("src", src);
			      zoomedImage.offset(pos);
			      zoomedImage.css("width",width);
			      zoomedImage.css("height",height);
			      zoomedImage.css("max-width",width);
			      zoomedImage.css("max-height",height);
			      resolve();
			    });
			  }
				function activateBlurBackground(thisEl) {
					return new Promise(function(resolve, reject) {
						let zoomBlurBackground = $(thisEl).find(".zoom_blur_background");
						zoomBlurBackground.animate({
							opacity: 0.8,
						});
					});
				}
			  function centerImagePX(){
			    return new Promise(function(resolve, reject) {
			      zoomedImage.animate({
			        top: ($("html").height() - zoomedImage.height())/2+"px",
			        left: ($("html").width() - zoomedImage.width())/2+"px",
			      },function(){
			        resolve();
			      });
			    });
			  }
			  function centerImagePC(){
			    return new Promise(function(resolve, reject) {
			      zoomedImage.css({
			        top: "50%",
			        left: "50%",
			        transform: "translate(-50%, -50%)",
			      });
			      resolve();
			    });
			  }
			  function extendPX(){
			    return new Promise(function(resolve, reject) {
			      zoomedImage.css("width","");
			      zoomedImage.css("height","");
			      zoomedImage.animate({
			        "max-width": $("html").width()+"px",
			        "max-height": $("html").height()+"px",
			      }, "linear", function(){
			        resolve();
			      });
			    });
			  }
			  function extendPC(){
			    return new Promise(function(resolve, reject) {
			      zoomedImage[0].style.maxWidth = "";
			      zoomedImage[0].style.maxWidth = "100%";
			      zoomedImage[0].style.maxHeight = "";
			      zoomedImage[0].style.maxHeight = "100%";
			      resolve();
			    });
			  }
			  function setSource(thisEl, picture){
			      return new Promise(function(resolve, reject) {
			          let source = $(picture).attr("data-source");
								console.log(picture, source);
			          if(source){
									$(thisEl).find(".zoomed_image_source").text("Quelle: "+source);
			          }else{
			            $(thisEl).find(".zoomed_image_source").text("");
			          }
			         resolve();
			      });
			  }

			  setSource(this.$el, picture)
			  .then(setToOrgiginalPos(pos, src, width, height))
				.then(activateBlurBackground(this.$el))
			  .then(centerImagePX)
			  .then(centerImagePC)
			  .then(extendPX)
			  .then(extendPC);
			});
		},
		data: function() {
			return {
				activeId: 1,
			};
		},
		methods: {
			scroll: function(direction){
			  let picture_container = $(this.$el).find(".picture_container")[0];;
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
			},
			closeZoom: function() {
				var zoomedImage = $(this.$el).find(".zoomed_image");
				let zoomBlurBackground = $(this.$el).find(".zoom_blur_background");

				let self = this;
				zoomBlurBackground.animate({
					opacity: 0,
				}, function() {
					$(self.$el).removeClass("zoom");
				});

				zoomedImage.hide();
				zoomedImage.removeAttr("style");
				zoomedImage.removeAttr("src");
			},
		},
	}
</script>
<style>
	.gallery {
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
	.zoom_blur_background {
		background-color: black;
		z-index: -1;
		top: 0px;
		left: 0px;
		display: block;
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.gallery.zoom .zoom_blur_background{
		z-index: 2000;
	}
	.gallery.zoom .zoomed_image_source{
	    display: block;
	    position: fixed;
	    bottom: 15px;
	    left: 50%;
	    transform: translateX(-50%);
	}
	.zoomed_image_source{
	    display: none;
	    z-index: 2002;
	    color: white;
	}
	.zoomed_image {
		position: fixed;
		z-index: 2002;
	}
</style>

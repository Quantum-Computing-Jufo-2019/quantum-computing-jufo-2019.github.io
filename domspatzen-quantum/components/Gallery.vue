<template>
	<div class="gallery">
		<div class="zoom_blur_background" @click="closeZoom" />
		<picture @click="closeZoom">
			<source :srcset="currentWebpSrc" type="image/webp">
			<img class="zoomed_image" :src="currentJpgSrc" type="image/jpg">
		</picture>
		<span class="zoomed_image_source" />
		<div class="gallery_control_container">
			<img class="gallery_control" alt="" src="~/assets/arrow_back.svg" @click="scroll(-1)">
		</div>
		<div class="picture_container">
			<slot />
		</div>
		<div class="gallery_control_container">
			<img class="gallery_control" alt="" src="~/assets/arrow_forward.svg" @click="scroll(1)">
		</div>
	</div>
</template>
<script>
export default {
	props: [],
	data() {
		return {
			currentJpgSrc: '',
			currentWebpSrc: '',
			activeId: 1,
		}
	},
	mounted() {
		this.$on('zoomPicture', function(id, ) {
			let picture
			const picture_container = $(this.$el, ).find('.picture_container', )[0]
			console.log(picture_container, )
			const pictures = picture_container.childNodes

			for (let i = 0; i < pictures.length; i++) {
				if ($(pictures[i], ).attr('data-id', ) == id) {
					picture = pictures[i]
				}
			}

			$(this.$el).addClass('zoom', )

			const pos = $(picture, ).offset()
			const height = $(picture, ).height()
			const width = $(picture, ).width()

			const zoomedImage = $(this.$el, ).find('.zoomed_image', )
			zoomedImage.show()

			this.currentWebpSrc = $(picture, ).attr('data-webp-src', )
			this.currentJpgSrc = $(picture, ).attr('data-jpg-src', )

			function setToOrgiginalPos(pos, width, height, ) {
				return new Promise(function(resolve, reject, ) {
					console.log(pos, )
					zoomedImage.offset(pos, )
					zoomedImage.css('width', width, )
					zoomedImage.css('height', height, )
					zoomedImage.css('max-width', width, )
					zoomedImage.css('max-height', height, )
					resolve()
				}, )
			}

			function activateBlurBackground(thisEl, ) {
				return new Promise(function(resolve, reject, ) {
					const zoomBlurBackground = $(thisEl, ).find('.zoom_blur_background', )
					zoomBlurBackground.show()
					zoomBlurBackground.animate({
						opacity: 0.8,
					}, )
				}, )
			}

			function centerImagePX() {
				return new Promise(function(resolve, reject, ) {
					zoomedImage.animate({
						top: ($('html', ).height() - zoomedImage.height()) / 2 + 'px',
						left: ($('html', ).width() - zoomedImage.width()) / 2 + 'px',
					}, function() {
						resolve()
					}, )
				}, )
			}

			function centerImagePC() {
				return new Promise(function(resolve, reject, ) {
					zoomedImage.css({
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}, )
					resolve()
				}, )
			}

			function extendPX() {
				return new Promise(function(resolve, reject, ) {
					zoomedImage.css('width', '', )
					zoomedImage.css('height', '', )
					zoomedImage.animate({
						'max-width': $('html', ).width() + 'px',
						'max-height': $('html', ).height() + 'px',
					}, 'linear', function() {
						resolve()
					}, )
				}, )
			}

			function extendPC() {
				return new Promise(function(resolve, reject, ) {
					zoomedImage[0].style.maxWidth = ''
					zoomedImage[0].style.maxWidth = '100%'
					zoomedImage[0].style.maxHeight = ''
					zoomedImage[0].style.maxHeight = '100%'
					resolve()
				}, )
			}

			function setSource(thisEl, picture, ) {
				return new Promise(function(resolve, reject, ) {
					const source = $(picture, ).attr('data-source', )
					if (source) {
						$(thisEl, ).find('.zoomed_image_source', ).text('Quelle: ' + source, )
					} else {
						$(thisEl, ).find('.zoomed_image_source', ).text('', )
					}
					resolve()
				}, )
			}

			setSource(this.$el, picture, )
				.then(setToOrgiginalPos(pos, width, height, ), )
				.then(activateBlurBackground(this.$el, ), )
				.then(centerImagePX, )
				.then(centerImagePC, )
				.then(extendPX, )
				.then(extendPC, )
		}, )
	},
	methods: {
		scroll(direction, ) {
			const picture_container = $(this.$el, ).find('.picture_container', )[0]
			const pictures = picture_container.childNodes

			const new_current_id = this.activeId + direction

			let new_current_picture
			for (let i = 0; i < pictures.length; i++) {
				if ($(pictures[i], ).attr('data-id', ) == new_current_id) {
					new_current_picture = pictures[i]
				}
			}

			if (new_current_picture) {
				const offset = 0
				$(picture_container, ).scrollTo(new_current_picture, 500, {
					offset,
				}, )
				this.activeId = new_current_id
			}
		},
		closeZoom() {
			const zoomedImage = $(this.$el, ).find('.zoomed_image', )
			const zoomBlurBackground = $(this.$el, ).find('.zoom_blur_background', )

			const self = this
			zoomBlurBackground.animate({
				opacity: 0,
			}, function() {
				$(self.$el, ).removeClass('zoom', )
				zoomBlurBackground.hide()
			}, )

			zoomedImage.hide()
			zoomedImage.removeAttr('style', )
			this.currentWebpSrc = ''
			this.currentJpgSrc = ''
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
	.gallery_control_container {
		width: 10%;
		vertical-align: middle;
		display: flex;
	}
  html.mobile .gallery_control_container {
    display: none;
  }
	.gallery_control {
		width: 100%;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
	}
	.picture_container {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		width: 80%;
		overflow-y: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
  html.mobile .picture_container {
    width: 100%;
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
	.gallery.zoom .zoom_blur_background {
		z-index: 2000;
	}
	.gallery.zoom .zoomed_image_source {
	    display: block;
	    position: fixed;
	    bottom: 15px;
	    left: 50%;
	    transform: translateX(-50%);
	}
  html.mobile .zoom_blur_background {
    display: none;
  }
	.zoomed_image_source {
	    display: none;
	    z-index: 2002;
	    color: white;
	}
	.zoomed_image {
		position: fixed;
		z-index: 2002;
	}
</style>

<template>
	<div class="gallery">
		<div class="zoom_blur_background" @click="closeZoom" />
		<picture @click="closeZoom">
			<source :srcset="currentWebpSrc" type="image/webp">
			<img class="zoomed_image" :src="currentJpgSrc" type="image/jpg" alt="">
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
		};
	},
	mounted() {
		this.$on('zoomPicture', function(id) {
			let picture;
			const picture_container = this.$el.querySelector('.picture_container');
			console.log(picture_container);
			const pictures = picture_container.children;

			for (let i = 0; i < pictures.length; i++) {
				console.log(pictures[i]);
				if (pictures[i].getAttribute('data-id') == id) {
					picture = pictures[i];
				}
			}

			this.$el.classList.add('zoom');

			const pos = picture.getBoundingClientRect();
			const height = pos.height;
			const width = pos.width;

			console.log(height, width);

			let zoomedImage = this.$el.querySelector('.zoomed_image');
			zoomedImage.style.display = "";

			this.currentWebpSrc = picture.getAttribute('data-webp-src');
			this.currentJpgSrc = picture.getAttribute('data-jpg-src');

			function setToOrgiginalPos(pos, width, height) {
				return new Promise(function(resolve, reject) {
					console.log("setToOrgiginalPos");
					console.log(pos);
					zoomedImage.style.top = pos.top + "px";
					zoomedImage.style.left = pos.left + "px";
					zoomedImage.style.width = width + "px";
					zoomedImage.style.height = height + "px";
					zoomedImage.style.maxWidth = width + "px";
					zoomedImage.style.maxHeight = height + "px";

					setTimeout(function() {
						resolve();
					}, 1000);
				});
			}

			function activateBlurBackground(thisEl) {
				return new Promise(function(resolve, reject) {
					console.log("activateBlurBackground");
					const zoomBlurBackground = thisEl.querySelector('.zoom_blur_background');
					zoomBlurBackground.style.display = '';
					zoomBlurBackground.style.opacity = 0.8;

					setTimeout(function() {
						resolve();
					}, 1000);
				});
			}

			function centerImagePX() {
				return new Promise(function(resolve, reject) {
					console.log("centerImagePX");
					let htmlBounds = document.getElementsByTagName("html")[0].getBoundingClientRect();
					let zoomedImageBounds = zoomedImage.getBoundingClientRect();

					zoomedImage.classList.add("topLeftTransition");
					zoomedImage.style.top = (htmlBounds.height - zoomedImageBounds.height) / 2 + 'px';
					zoomedImage.style.left = (htmlBounds.width - zoomedImageBounds.width) / 2 + 'px';

					setTimeout(function() {
						zoomedImage.classList.remove("topLeftTransition");
						resolve();
					}, 1000);
				});
			}

			function centerImagePC() {
				return new Promise(function(resolve, reject) {
					console.log("centerImagePC");
					zoomedImage.style.top = '50%';
					zoomedImage.style.left = '50%';
					zoomedImage.style.transform = 'translate(-50%, -50%)';

					setTimeout(function() {
						resolve();
					}, 1000);
				});
			}

			function extendPX() {
				return new Promise(function(resolve, reject) {
					console.log("extendPX");
					zoomedImage.style.width = '';
					zoomedImage.style.height = '';

					let htmlBounds = document.getElementsByTagName("html")[0].getBoundingClientRect();

					zoomedImage.classList.add("maxWidthHeightTransition");
					zoomedImage.style.maxWidth = htmlBounds.width + 'px';
					zoomedImage.style.maxHeight = htmlBounds.height + 'px';

					setTimeout(function() {
						zoomedImage.classList.remove("maxWidthHeightTransition");
						resolve();
					}, 1000);
				});
			}

			function extendPC() {
				return new Promise(function(resolve, reject) {
					console.log("extendPC");
					zoomedImage.style.maxWidth = '';
					zoomedImage.style.maxWidth = '100%';
					zoomedImage.style.maxHeight = '';
					zoomedImage.style.maxHeight = '100%';

					setTimeout(function() {
						resolve();
					}, 1000);
				});
			}

			function setSource(thisEl, picture) {
				return new Promise(function(resolve, reject) {
					console.log("setSource");
					const source = picture.getAttribute('data-source');
					if (source) {
						thisEl.querySelector('.zoomed_image_source').innerText = 'Quelle: ' + source;
					} else {
						thisEl.querySelector('.zoomed_image_source').innerText = '';
					}

					setTimeout(function() {
						resolve();
					}, 1000);
				});
			}

			setSource(this.$el, picture)
				.then(setToOrgiginalPos(pos, width, height))
				.then(activateBlurBackground(this.$el))
				.then(centerImagePX)
				.then(centerImagePC)
				.then(extendPX)
				.then(extendPC);
		});
	},
	methods: {
		scroll(direction) {
			const picture_container = $(this.$el).find('.picture_container')[0];
			const pictures = picture_container.childNodes;

			const new_current_id = this.activeId + direction;

			let new_current_picture;
			for (let i = 0; i < pictures.length; i++) {
				if ($(pictures[i]).attr('data-id') == new_current_id) {
					new_current_picture = pictures[i];
				}
			}

			if (new_current_picture) {
				this.scrollToElement({
					container: picture_container,
					element: new_current_picture,
					duration: 500,
				});

				this.activeId = new_current_id;
			}
		},
		closeZoom() {
			const zoomedImage = this.$el.querySelector('.zoomed_image');
			const zoomBlurBackground = this.$el.querySelector('.zoom_blur_background');

			const self = this;
			zoomBlurBackground.style.opacity = 0;

			setTimeout(function() {
				self.$el.classList.remove('zoom');
				zoomBlurBackground.style.display = 'none';
			}, 500);

			zoomedImage.style.display = 'none';
			zoomedImage.removeAttribute('style');
			this.currentWebpSrc = '';
			this.currentJpgSrc = '';
		},
		getOffset(el) {
	    let _x = 0;
	    let _y = 0;
	    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
	        _x += el.offsetLeft;
	        _y += el.offsetTop;
	        el = el.offsetParent;
	    }
	    return { top: _y, left: _x, };
		},
		scrollToElement(options) {
			const scrollLeftStart = options.container.scrollLeft;
			const containerOffsetLeft = this.getOffset(options.container).left;
			const scrollLeftEnd = options.element.offsetLeft - containerOffsetLeft;

			let start;

			function easeInOutCubic(x) {
				return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
			}

			function step(timestamp) {
				if (start === undefined) {
					start = timestamp;
				}

				const elapsed = timestamp - start;
				const progress = Math.min(elapsed / options.duration, 1);

				const currentLeft = scrollLeftStart + ((scrollLeftEnd - scrollLeftStart) * easeInOutCubic(progress));

				options.container.scrollLeft = currentLeft;

				if (elapsed < options.duration) {
					window.requestAnimationFrame(step);
				}
			}

			window.requestAnimationFrame(step);
		},
	},
};
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
		opacity: 0;
		transition: opacity 0.5s;
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
	.zoomed_image.topLeftTransition {
		transition: left 1s linear, top 1s linear;
	}
	.zoomed_image.maxWidthHeightTransition {
		transition: max-width 1s linear, max-height 1s linear;
	}
</style>

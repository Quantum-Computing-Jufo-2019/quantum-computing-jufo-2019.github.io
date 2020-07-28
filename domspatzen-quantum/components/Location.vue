<template>
	<div class="location">
		<img class="location_icon" alt="" src="~/assets/location.svg">
		<p class="location_text">
			{{ content }}
		</p>
	</div>
</template>
<script>
export default {
	props: {
		content: {
			type: String,
			default: '',
		},
	},
};
</script>
<style>
	.location {
		width: fit-content;
		margin: auto;
	}
  .location_icon {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    object-fit: contain;
    margin-right: 4px;
  }
	.location_text{
			margin: 0px;
			vertical-align: super;
			color: white;
			text-decoration: none;
			font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
			font-size: x-large;
		}
	.location_link{
			text-decoration: none
	}
	@media (pointer:none), (pointer:coarse) {
		.location_icon {
				display: none;
		}
		.location_text{
			font-size: xx-large;
			width: 100%;
			text-align: center;
			font-weight: bold;
		}
		.location{
				width: 100%;
				margin: 0px;
		}
	}
	@media (hover: hover) and (pointer: fine) {
		.location{
				display: flex;
		}
	}
</style>

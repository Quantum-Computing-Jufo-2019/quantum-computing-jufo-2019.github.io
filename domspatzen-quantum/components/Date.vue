<template>
	<div class="date">
		<img class="date_icon" alt="" src="~/assets/calendar.svg">
		<p class="date_text">
			{{ content }}
		</p>
	</div>
</template>
<script>
export default {
	props: [ 'content', ],
};
</script>
<style>
	.date {
		width: fit-content;
		margin: auto;
    margin-bottom: 5px;
	}
  .date_icon {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    object-fit: contain;
    margin-right: 4px;
  }
	.date_text {
		vertical-align: super;
		color: white;
		text-decoration: none;
		font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
		font-size: x-large;
	}
	html:not(.phone) .date {
			display: flex;
	}
	html.phone .date {
			width: 100%;
			margin: 0px;
	}
	html.phone .date_icon {
			display: none;
	}
	html.phone .date_text{
		font-size: x-large;
		width: 100%;
		text-align: center
	}
</style>

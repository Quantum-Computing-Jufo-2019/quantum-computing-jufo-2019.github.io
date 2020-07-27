<template>
	<div id="first_section" class="section">
		<h1 id="main_headline">
			Lösung des n-Damenproblems auf einem adiabatischen Quantencomputer
		</h1>
		<svg
			id="scroll_button"
			xmlns="http://www.w3.org/2000/svg"
			width="75"
			height="75"
			viewBox="0 0 24 24"
			@click="scrollToSection2"
		><path fill="var(--green2)" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /></svg>
	</div>
</template>
<script>
export default {
	methods: {
		scrollToSection2() {
			const yPosition = document.getElementById('second_section').offsetTop;

			window.scroll({
				top: yPosition,
				behavior: 'smooth',
			});
		},
	},
};
</script>
<style>
	#first_section {
		min-width: 100%;
		min-height: 100%;
		background-color: var(--green2);
		display: grid;
		place-items: center;
	}

	#main_headline {
		position: absolute;
		bottom: 50%;
		left: 50%;
		font-family: "polya";
		color: black;
		vertical-align: middle;
		margin: 0px;
		transform: translate(-50%, 50%);
		width: 90%;
	}

	html:not(.phone) #main_headline {
		font-size: -webkit-xxx-large;
	}

	html.phone #main_headline {
		font-size: 30px;
    overflow-wrap: break-word;
	}

	#scroll_button {
		position: absolute;
		bottom: 30px;
		border-radius: 100%;
		left: 50%;
		transform: translateX(-50%);
		background-color: white;
	}

	html.phone #scroll_button {
		display: none;
	}

	html:not(.mobile) #scroll_button:hover {
		background-color: lightgray;
	}
</style>

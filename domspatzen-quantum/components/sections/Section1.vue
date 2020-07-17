<template>
	<div class="section" id="first_section">
		<h1 id="main_headline">Lösung des n-Damenproblems auf einem adiabatischen Quantencomputer</h1>
		<svg id="scroll_button" onclick="$('body').scrollTo('#second_section',{duration: 500, easing: 'swing'});" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path fill="var(--green2)" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
	</div>
</template>
<style>
	#first_section{
		min-width: 100%;
		min-height: 100%;
		background-color: var(--green2);
		display: grid;
		place-items: center;
	}
	#main_headline{
		position: absolute;
		bottom: 50%;
		font-family: "polya";
		font-size: -webkit-xxx-large;
		color: black;
		vertical-align: middle;
		margin: 0px;
		transform: translateY(50%);
	}
	html.phone #main_headline{
			transform: translateY(50%) translateY(-50px);
	}
	html:not(.phone) #main_headline{
			width: 100%;
	}
	html.phone #main_headline{
			margin: 0px 5% 0px 5%;
	}
	html.phone #main_headline{
			font-size: 80px;
	}
	#scroll_button{
		position: absolute;
		bottom: 30px;
		border-radius: 100%;
		left: 50%;
		transform: translateX(-50%);
		background-color: white;
	}
	html.phone #scroll_button{
			width: 200px;
			height: 200px;
	}
	html:not(.mobile) #scroll_button:hover{
		background-color: lightgray;
	}
</style>

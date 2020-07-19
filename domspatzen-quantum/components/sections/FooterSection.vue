<template>
	<div class="section" id="footer_section">
		<p class="footer_text footer_text_copyright">©Jakov Wallbrecher (14), Paul Schappert (15), Jonathan Treffler (16), 2019</p>
    <div class="footer_text footer_text_phone_copyright">
    	<span>Jakov Wallbrecher (14)</span>
			<span>Paul Schappert (15)</span>
			<span>Jonathan Treffler (16)</span>
			<span>2019</span>
		</div>
		<p class="footer_text">mail@domspatzen-quantum.de</p>
	</div>
</template>
<style>
	#footer_section{
		width: 100%;
		background-color: var(--green3);
		padding-top: 1%;
		padding-bottom: 1%;
	}
	html.phone #footer_section{
			padding-top: 3%;
			padding-bottom: 2%;
	}
	.footer_text{
		margin: 0px;
		margin-bottom: 4px;
		color: white;
		text-align: center;
		padding-left: 6px;
		padding-right: 6px;
		font-size: x-large;
	}
	html:not(.phone) .footer_text_phone_copyright {
		display: none;
	}
	html.phone .footer_text_phone_copyright {
		display: flex;
		flex-flow: column;
    flex-wrap: nowrap;
	}
	html.phone .footer_text_copyright {
		display: none;
	}
</style>

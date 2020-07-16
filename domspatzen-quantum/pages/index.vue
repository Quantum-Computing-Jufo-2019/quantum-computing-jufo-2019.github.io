<template>
	<div style="width: 100%; height: 100%;">
		<div id="zoom_blur_background" onclick="closeZoom();"></div>
		<img id="zoomed_image" alt="" onclick="closeZoom();">
		<div id="cookie_alert">
				<p id="cookie_alert_headline">Darf diese Website Cookies verwenden?</p>
				<div id="cookie_alert_button_conatainer">
						<button class="cookie_alert_button" onclick="accept_cookies()">Ja</button>
						<button class="cookie_alert_button" onclick="decline_cookies()">Nein</button>
				</div>
		</div>
		<span id="zoomed_image_source"></span>
		<selections-container>
			<section1 />
			<section2 />
			<section3 />
			<section4 />
			<section5 />
			<footer-section />
		</selections-container>
	</div>
</template>

<script>
import Section1 from '~/components/sections/Section1.vue';
import Section2 from '~/components/sections/Section2.vue';
import Section3 from '~/components/sections/Section3.vue';
import Section4 from '~/components/sections/Section4.vue';
import Section5 from '~/components/sections/Section5.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

import SelectionsContainer from '~/components/SelectionsContainer.vue'

export default {
  components: {
		Section1,
		Section2,
		Section3,
		Section4,
		Section5,
		FooterSection,
		SelectionsContainer,
  }
}
</script>

<style>
	:root{
	  --green1: #C0CF3A;
	  --green2: #8AB833;
	  --green3: #549E39;
	  --red: #ea4335;
	  --blue: #b0d3b6;
	}
	html{
	  overflow-y: visible;
	}
	body, html {
	  height: 100%;
	}
	body {
	  background-color: white;
	  border: none;
	  margin: 0;
	}
	p{
	  font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
	}
	h1 , h2 , h3 , h4 , h5{
	  text-align: center;
	}
	@font-face {
	  font-family: polya;
	  src: url("/assets/POLYA.woff2");
	  font-display: swap;
	}
	.section{
	    width: 100%;
	}
	.section:not(#footer_section):not(#first_section){
	    padding-bottom: 1%;
	    padding-top: 1%;
	}
	html.phone .section:not(#footer_section):not(#first_section){
	    padding-bottom: 5%;
	    padding-top: 2%;
	}
	#third_section{
	  background-color: var(--green2);
	}
	#history_container{
	  display: flex;
	  flex-flow: column;
	  flex-wrap: nowrap;
	}
	.news_container{
	  margin: auto;
	}
	#zoom_blur_background{
	  display: none;
	  opacity: 0;
	  transition: opacity 2s;
	}
	html.zoom #zoom_blur_background{
	  display: block;
	  background-color: black;
	  position: fixed;
	  width: 100%;
	  height: 100%;
	  z-index: 2000;
	  opacity: 0.9;
	}
	html.zoom #zoomed_image_source{
	    display: block;
	    position: fixed;
	    bottom: 15px;
	    left: 50%;
	    transform: translateX(-50%);
	}
	#zoomed_image_source{
	    display: none;
	    z-index: 2002;
	    color: white;
	}
	html.mobile .upcoming_text{
	  font-size: x-large;
	}
	html.phone .cookie_alert{
	    width: 100%;
	    height: 100%;
	}
	html.phone .cookie_alert .swal2-content{
	    font-size: 50px;
	}
	html.phone .cookie_alert .swal2-actions{
	    width: 100%;
	}
	html.phone .cookie_alert button{
	    width: 50%;
	}
	html.phone .cookie_alert_container{
	    padding: 0;
	}
	#cookie_alert{
	    display: none;
	    position: fixed;
	    bottom: 0px;
	    left: 50%;
	    transform: translateX(-50%);
	    width: 50%;
	    background-color: white;
	    padding-left: 7%;
	    padding-right: 7%;
	    padding-top: 10px;
	    padding-bottom: 10px;
	    z-index: 3000;
	}
	html.mobile #cookie_alert{
	    width: 100%;
	    height: 40%;
	}
	#cookie_alert_headline{
	    text-align: center;
	    margin-bottom: 20px;
	    font-size: xx-large;
	}
	html.phone #cookie_alert_headline{
	}
	.cookie_alert_button{
	    background-color: white;
	    border-radius: 0px;
	    border: 2px solid gray;
	    width: 50%;
	    height: 40px;
	}
	.cookie_alert_button:first-child{
	    background-color: var(--green2);
	    font-weight: bold;
	}
	html.phone .cookie_alert_button{
	    width: 90%;
	    height: 100px;
	    font-size: xx-large;
	    border: 5px solid gray;
	}
	html:not(.phone) .cookie_alert_button:not(:last-child){
	    margin-right: 10px;
	}
	html.phone .cookie_alert_button{
	    margin-bottom: 10px;
	}
	html:not(.mobile) .cookie_alert_button:hover{
	    background-color: gray;
	}
	#cookie_alert_button_conatainer{
	    display: flex;
	    flex-flow: row;
	    flex-wrap: nowrap;
	}
	html.phone #cookie_alert_button_conatainer{
	    flex-flow: column;
	    flex-wrap: nowrap;
	    align-items: center;
	}
</style>

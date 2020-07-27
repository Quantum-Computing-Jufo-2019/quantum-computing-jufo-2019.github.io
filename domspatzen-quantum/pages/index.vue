<template>
	<div style="width: 100%; height: 100%;">
		<cookie-alert />
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
import CookieAlert from '~/components/CookieAlert.vue';
import Section1 from '~/components/sections/Section1.vue';
import Section2 from '~/components/sections/Section2.vue';
import Section3 from '~/components/sections/Section3.vue';
import Section4 from '~/components/sections/Section4.vue';
import Section5 from '~/components/sections/Section5.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

import SelectionsContainer from '~/components/SelectionsContainer.vue';

export default {
	components: {
		CookieAlert,
		Section1,
		Section2,
		Section3,
		Section4,
		Section5,
		FooterSection,
		SelectionsContainer,
	},
	mounted() {
		this.checkDeviceType();
	},
	methods: {
		checkDeviceType() {
			// eslint-disable-next-line
			const md = new MobileDetect(window.navigator.userAgent);
			const html = document.getElementsByTagName('html')[0];

			this.setClassState(md.mobile(), html, 'mobile');
			this.setClassState(md.phone(), html, 'phone');
			this.setClassState(md.tablet(), html, 'tablet');
		},
		setClassState(condition, element, className) {
			if (condition) {
				element.classList.add(className);
			} else {
				element.classList.remove(className);
			}
		},
	},
};
</script>

<style>
	:root{
		--green1: #C0CF3A;
		--green2: #8AB833;
		--green3: #549E39;
		--red: #ea4335;
		--blue: #b0d3b6;
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
</style>

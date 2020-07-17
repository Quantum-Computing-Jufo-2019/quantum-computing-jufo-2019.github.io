<template>
	<div class="section" id="fifth_section">
		<headline>Downloads</headline>
		<downloadsContainer>
			<download content="Dokumentation" href="/downloads/dokumentation.pdf"></download>
			<download content="Resultsbook" href="/downloads/resultsbook.pdf"></download>
			<download content="Plakate" href="/downloads/plakate.zip"></download>
			<download content="Bildschirmpräsentation" href="/downloads/bildschirmpräsentation.pptx"></download>
			<download content="N-Damen App (Play Store)" href="https://play.google.com/store/apps/details?id=com.geniuseful.ndamen"></download>
			<github content="Github Repository" href="https://github.com/Quantum-Computing-Jufo-2019/JuFo-2019-Quantum-Computing"></github>
		</downloadsContainer>
	</div>
</template>
<script>
	import Download from '~/components/Download.vue';
	import DownloadsContainer from '~/components/DownloadsContainer.vue';
	import Headline from "~/components/Headline.vue";
	import Github from '~/components/Github.vue';

	export default {
		components: {
			Download,
			DownloadsContainer,
			Github,
			Headline,
		},
	};
</script>
<style>
	#fifth_section{
		background-color: var(--green2);
		width: 100%;
		padding-bottom: 25px !important;
	}
</style>

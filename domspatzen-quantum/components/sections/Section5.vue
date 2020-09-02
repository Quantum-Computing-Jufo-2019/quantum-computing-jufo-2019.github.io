<template>
	<div id="fifth_section" class="section">
		<headline>Downloads</headline>
		<downloadsContainer>
			<download content="Dokumentation" href="/downloads/dokumentation.pdf" />
			<download content="Resultsbook" href="/downloads/resultsbook.pdf" />
			<download content="Plakate" href="/downloads/plakate.zip" />
			<download content="Bildschirmpräsentation" href="/downloads/bildschirmpräsentation.pptx" />
			<download content="N-Damen App (Play Store)" href="https://play.google.com/store/apps/details?id=com.geniuseful.ndamen" />
			<github content="Github Repository" href="https://github.com/Quantum-Computing-Jufo-2019/JuFo-2019-Quantum-Computing" />
		</downloadsContainer>
	</div>
</template>
<script>
import Download from "~/components/Download.vue";
import DownloadsContainer from "~/components/DownloadsContainer.vue";
import Headline from "~/components/Headline.vue";
import Github from "~/components/Github.vue";

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

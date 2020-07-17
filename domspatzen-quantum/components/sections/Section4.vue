<template>
	<div class="section" id="fourth_section">
		<headline>Wir bedanken uns bei:</headline>
		<!--<p>Wir bedanken uns bei unserem Projektbetreuer René Grünbauer für die Betreuung und den Kontakt zum Forschungszentrum Jülich. Außerdem möchten wir uns bei Prof. Dr. Kristel Michielsen vom Forschungszentrum Jülich für ihre Unterstützung und die Rechenzeit am D-Wave Quantencomputer bedanken. Nicht zuletzt wollen wir Herrn Dennis Willsch aus der Forschungsgruppe von Prof. Michielsen für die Erklärungen und Hilfestellungen rund um die Benutzung und Steuerung des Quantencomputers danken.</p>-->
		<ul id="thanks_list">
			<li>Rene Grünbauer (der beste Betreuer der Welt)</li>
			<!--<li>Dr. Patrick Glauner für die Einladung einen Vortrag für Krones zu geben</li>
			<li>Dennis Willsch vom Forschungszentrum Jülich</li>
			<li>Andreas Neunzer und Katharina Scharr für die großartigen Verbesserungsvorschläge</li>-->
			<li>Prof. Dr. Kristel Michielsen vom Forschungszentrum Jülich für die Rechenzeit auf dem D-Wave Quantencomputer und die Einladung einen Vortrag beim ISC 19 zu halten</li>
			<li>Dennis Willsch vom Forschungszentrum Jülich für die Erklärungen und Hilfestellungen rund um die Benutzung und Steuerung des Quantencomputers</li>
			<li>Herrn Dr. Patrick Glauner für die Einladung, einen Vortrag bei der Krones AG zu halten</li>
			<li>Frau Dr. Katharina Schaar und den anderen Juroren des Fachbereichs Mathematik beim Landeswettbewerb Jugend Forscht für die vielen Verbesserungsvorschläge</li>
			<li>Herrn Dr. Andreas Neuzner (Physik Juror, Landeswettbewerb Jugend Forscht) für den Kontakt zum MPQ, an dem wir einen Vortrag halten dürfen</li>
			<li>Stephan Ritter für die großartigen Tips für den Bundeswettbewerb</li>
			<li>Pfleiderer und Dräxlmaier</li>
		</ul>
	</div>
</template>
<script>
	import Headline from "~/components/Headline.vue";

	export default {
		components: {
			Headline,
		},
	};
</script>
<style>
	#fourth_section{
			background-color: var(--blue);
	}
	html.phone #fourth_section{
			background-color: white;
	}
	#fourth_section p, #fourth_section ul{
			margin-left: 5%;
			margin-right:5%;
	}
	#fourth_section li:not(:last-child){
			margin-bottom: 3px;
	}
	#thanks_list li{
		font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
		font-size: x-large;
	}
</style>

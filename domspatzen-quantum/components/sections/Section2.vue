<template>
	<div id="second_section" class="section">
		<headline>About</headline>
		<p class="about_text">
			Auf einem n x n großen Schachfeld sollen n Damen so aufgestellt werden, dass keine Dame eine andere bedroht. Dieses klassische Schachproblem haben wir auf einem adiabatischen Quantencomputer gelöst.
		</p>
		<p class="about_text">
			Des Weiteren konnten wir unsere Lösungsstrategien auf andere Optimierungsprobleme, wie z.B. Sudokus und das Springerproblem, übertragen.
		</p>
		<p class="about_text">
			Bei unserer Arbeit ging es aber nicht um das Finden von Lösungen für das n-Damenproblem, wofür es bereits gut geeignete Algorithmen auf herkömmlichen Computern gibt, sondern viel mehr um die Aufbereitung des Problems, die notwendig ist, damit es mit dem von uns verwendeten Quantencomputer, einem sogenannten adiabatischen Quantum-Annealer, gelöst werden kann.
		</p>
		<p class="about_text">
			Für unser Vorhaben mussten wir das Damenproblem in die Sprache der Mathematik übersetzen. Dabei galt es, eine Funktion zu definieren, die für jede Konstellation der Damen auf dem Schachbrett einen Wert zurückgibt, den man in der Optimierung als "Energie" der Verteilung bezeichnet.
		</p>
		<p class="about_text">
			Die Aufgabe des Quantum-Annealers ist es dann, das globale Minimum dieser Energiefunktion und damit automatisch auch eine richtige Lösung zu finden.
		</p>
		<p class="about_text">
			Welche Schwierigkeiten wir bewältigen mussten und zu welchen Ergebnissen wir beim Ausführen der Programme gekommen sind, können Sie in unserer Dokumentation lesen.
		</p>
	</div>
</template>
<script>
import Headline from '~/components/Headline.vue';

export default {
	components: {
		Headline,
	},
};
</script>
<style>
	#second_section{
		width: 100%;
		background-color: white;
	}
	.about_text{
			margin-bottom: 2px;
			margin-top: 2px;
			margin-left: 10%;
			margin-right: 10%;
			font-size: 26px;
	}
</style>

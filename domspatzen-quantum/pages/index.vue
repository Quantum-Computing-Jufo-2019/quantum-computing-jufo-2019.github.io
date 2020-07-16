<template>
	<div>
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
		<div class="section" id="first_section">
			<h1 id="main_headline">Lösung des n-Damenproblems auf einem adiabatischen Quantencomputer</h1>
			<!--<svg id="scroll_button" onclick="$('body').scrollTo('#second_section',{duration: 500, easing: 'swing'});" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path fill="var(--green2)" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>-->
		</div>
		<div class="section" id="second_section">
			<h2 id="about_headline">About</h2>
			<p class="about_text">Auf einem n x n großen Schachfeld sollen n Damen so aufgestellt werden, dass keine Dame eine andere bedroht. Dieses klassische Schachproblem haben wir auf einem adiabatischen Quantencomputer gelöst.</p>
			<p class="about_text">Des Weiteren konnten wir unsere Lösungsstrategien auf andere Optimierungsprobleme, wie z.B. Sudokus und das Springerproblem, übertragen.</p>
			<p class="about_text">Bei unserer Arbeit ging es aber nicht um das Finden von Lösungen für das n-Damenproblem, wofür es bereits gut geeignete Algorithmen auf herkömmlichen Computern gibt, sondern viel mehr um die Aufbereitung des Problems, die notwendig ist, damit es mit dem von uns verwendeten Quantencomputer, einem sogenannten adiabatischen Quantum-Annealer, gelöst werden kann.</p>
			<p class="about_text">Für unser Vorhaben mussten wir das Damenproblem in die Sprache der Mathematik übersetzen. Dabei galt es, eine Funktion zu definieren, die für jede Konstellation der Damen auf dem Schachbrett einen Wert zurückgibt, den man in der Optimierung als "Energie" der Verteilung bezeichnet.</p>
			<p class="about_text">Die Aufgabe des Quantum-Annealers ist es dann, das globale Minimum dieser Energiefunktion und damit automatisch auch eine richtige Lösung zu finden.</p>
			<p class="about_text">Welche Schwierigkeiten wir bewältigen mussten und zu welchen Ergebnissen wir beim Ausführen der Programme gekommen sind, können Sie in unserer Dokumentation lesen.</p>
		</div>
		<div class="section" id="third_section">
			<h2 id="history_title">Verlauf</h2>
			<div id="history_container">
				<location content="Neumarkt in der Oberpfalz / Regionalentscheid"></location>
				<date content="21. - 22.02.2019"></date>
				<gallery>
					<galleryImage id="1" src="9.jpg" alt="Gruppenfoto" source="Pfleiderer Deutschland GmbH/ Diana Bachmeier"></galleryImage>
					<galleryImage id="2" src="1.jpeg" alt="Teamfoto vor unserem Stand"></galleryImage>
					<galleryImage id="3" src="2.jpg" alt="Teamfoto vor unserer Überlegungstafel"></galleryImage>
				</gallery>
				<news content="Mittelbayerische" href="https://www.mittelbayerische.de/region/regensburg-stadt-nachrichten/domspatzen-gewinnen-bei-jugend-forscht-21179-art1752772.html"></news>
				<spacer></spacer>
				<location content="Neutraubling / Vortrag bei der Krones AG"></location>
				<date content="25.3.2019"></date>
				<gallery>
					<galleryImage src="7.jpg" alt="Außenansicht Gebäude" id="1" data-source="Krones"></galleryImage>
					<galleryImage src="13.jpg" alt="Während unseres Vortrags" id="2"></galleryImage>
					<galleryImage src="14.jpg" alt="Während unseres Vortrags" id="3"></galleryImage>
					<galleryImage src="8.jpeg" alt="Foto mit Patrick Glauner und unserem Projektbetreuer Rene Grünbauer" id="4"></galleryImage>
				</gallery>
				<spacer></spacer>
				<location content="Vilsbiburg / Landesentscheid"></location>
				<date content="1. - 3.4.2019"></date>
				<gallery>
					<galleryImage src="3.jpg" alt="Teamfoto vor unserem Stand" id="1"></galleryImage>
					<galleryImage src="4.jpg" alt="unser Stand" id="2"></galleryImage>
					<galleryImage src="5.jpg" alt="Besuch vom Kultusminister an unserem Stand" id="3"></galleryImage>
					<galleryImage src="6.png" alt="Preisverleihung" id="4"></galleryImage>
				</gallery>
				<div class="news_container">
					<news content="Idowa" href="https://www.idowa.de/gallery.vilsbiburg-ueberraschende-konzepte-bei-jugend-forscht.78194094-a3b0-40f7-8b1d-e13d65c460de.html"></news>
					<news content="Mittelbayerische" href="https://www.mittelbayerische.de/region/regensburg-stadt-nachrichten/jugend-forscht-domspatzen-im-finale-21179-art1767967.html"></news>
					<news content="YouTube" href="https://www.youtube.com/watch?v=FhZ94-oB5o0"></news>
				</div>
				<spacer></spacer>
				<location content="München / Staatsempfang"></location>
				<date content="9.5.2019"></date>
				<gallery>
					<galleryImage src="11.jpg" alt="Prinz-Carl-Palais" id="1" data-source="Wikipedia"></galleryImage>
					<galleryImage src="10.jpeg" alt="Gruppenfoto Gewinner aus Bayern" id="2"></galleryImage>
					<galleryImage src="12.jpeg" alt="Teamfoto mit Projektbetreuer Rene Grünbauer" id="3" data-source="Jugend Forscht Bayern"></galleryImage>
				</gallery>
				<spacer></spacer>
				<location content="Chemnitz / Bundesentscheid"></location>
				<date content="16.5 - 19.5.2019"></date>
				<gallery>
					<galleryImage src="19.jpg" alt="unser Stand" id="1" data-source="Fraunhofer IWU"></galleryImage>
					<galleryImage src="16.jpg" alt="unser Team T-Shirt" id="2" data-source="Fraunhofer IWU"></galleryImage>
					<galleryImage src="17.jpg" alt="Sonderpreisverleihung" id="3" data-source="Fraunhofer IWU"></galleryImage>
					<galleryImage src="18.jpg" alt="Bühne der Preisverleihung" id="4" data-source="Fraunhofer IWU"></galleryImage>
					<galleryImage src="20.jpg" alt="Kuchen nach der Preisverleihung" id="5" data-source="Fraunhofer IWU"></galleryImage>
				</gallery>
				<news content="Domspatzen" href="https://www.domspatzen.de/gymnasium/aktuelles/detail/article/eine-schule-mit-den-faechern-musik-forschen-und-reisen.html"></news>
				<spacer></spacer>

				<location content="ISC 2019"></location>
				<date content="17.6. - 19.6.2019"></date>
				<gallery>
					<galleryImage src="21.jpg" alt="Wir am Rednerpult" id="1"></galleryImage>
					<galleryImage src="22.jpg" alt="Teamfoto vo unseren Plakaten am ISC" id="2"></galleryImage>
					<galleryImage src="23.png" alt="während des Vortrags" id="3"></galleryImage>
				</gallery>
				<news content="YouTube (Aufzeichnung)" href="https://www.youtube.com/watch?v=aM_pAA9FdYY"></news>
				<spacer></spacer>

				<location content="36C3 (Chaos Zone)"></location>
				<date content="29.12.2019 19:00"></date>
				<!--<h3 class="location_text" id="upcoming_text">Upcoming:</h3>
				<div id="upcoming_container">
				</div>-->
			</div>
		</div>
		<div class="section" id="fourth_section">
			<h2 id="thanks_headline">Wir bedanken uns bei:</h2>
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
		<div class="section" id="fifth_section">
			<h2 id="downloads_headline">Downloads</h2>
			<downloadsContainer>
				<download content="Dokumentation" href="/downloads/dokumentation.pdf"></download>
				<download content="Resultsbook" href="/downloads/resultsbook.pdf"></download>
				<download content="Plakate" href="/downloads/plakate.zip"></download>
				<download content="Bildschirmpräsentation" href="/downloads/bildschirmpräsentation.pptx"></download>
				<download content="N-Damen App (Play Store)" href="https://play.google.com/store/apps/details?id=com.geniuseful.ndamen"></download>
				<github content="Github Repository" href="https://github.com/Quantum-Computing-Jufo-2019/JuFo-2019-Quantum-Computing"></github>
			</downloadsContainer>
		</div>
		<div class="section" id="footer_section">
			<p class="footer_text">©Jakov Wallbrecher (14), Paul Schappert (15), Jonathan Treffler (16) , 2019</p>
			<p class="footer_text">mail@domspatzen-quantum.de</p>
		</div>
	</div>
</template>

<script>
import Location from '~/components/Location.vue'
import Date from '~/components/Date.vue'
import News from '~/components/News.vue'
import Download from '~/components/Download.vue'
import Github from '~/components/Github.vue'
import Spacer from '~/components/Spacer.vue'
import Gallery from '~/components/Gallery.vue'
import GalleryImage from '~/components/GalleryImage.vue'

export default {
  components: {
    Location,
		Date,
		News,
		Download,
		Github,
		Spacer,
		Gallery,
		GalleryImage,
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
	#first_section{
	  width: 100%;
	  height: 100%;
	  background-color: var(--green2);
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
	#second_section{
	  width: 100%;
	  background-color: white;
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
	.about_text{
	    margin-bottom: 2px;
	    margin-top: 2px;
	    margin-left: 10%;
	    margin-right: 10%;
	    font-size: 26px;
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
	.location, .news, .date{
	  width: fit-content;
	  margin: auto;
	}
	html:not(.phone) .location{
	    display: flex;
	}
	html:not(.phone) .date{
	    display: flex;
	}
	html.phone .location{
	    width: 100%;
	    margin: 0px;
	}
	html.phone .date{
	    width: 100%;
	    margin: 0px;
	}
	.location_text{
	    margin: 0px;
	}
	html.phone .news{
	    width: 100%;
	    text-align: center;
	}
	html.phone .news_container{
	    width: 100%;
	}
	html.mobile .location_text{
	  font-size: xx-large;
	  width: 100%;
	  text-align: center;
	  font-weight: bold;
	}
	html.phone .location_icon , html.phone .news_icon , html.phone .date_icon{
	    display: none;
	}
	html.mobile .news_text{
	  font-size: x-large;
	}
	html.phone .date_text{
	  font-size: x-large;
	  width: 100%;
	  text-align: center
	}
	html.mobile .upcoming_text{
	  font-size: x-large;
	}
	#upcoming_text{
	    margin-top: 15px;
	    margin-bottom: 3px;
	    text-align: center;
	}
	#upcoming_container{
	    margin: auto;
	}
	#upcoming_container .location{
	    margin: 0px auto 0px 0px;
	}
	.location_link{
	    text-decoration: none
	}
	.location_text , .news_text , .date_text{
	  vertical-align: super;
	  color: white;
	  text-decoration: none;
	  font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
	  font-size: x-large;
	}
	#fourth_section{
	    background-color: var(--blue);
	}
	html.phone #fourth_section{
	    background-color: white;
	}
	#fifth_section{
	  background-color: var(--green2);
	  width: 100%;
	  padding-bottom: 25px !important;
	}
	#downloads_headline , #history_title , #about_headline , #thanks_headline{
	  font-family: "polya";
	  margin: 0;
	  padding: 20px;
	  color: black;
	  font-size: xx-large;
	}
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
	.download{
	  margin: 5px;
	  padding: 5px;
	  display: flex;
	  flex-flow: column;
	  justify-content: center;
	  background-color: var(--green3);
	  border-radius: 7px;
	  flex-grow: 200;
	  flex-shrink: 0;
	}
	.download_a{
	  color: black;
	  text-decoration: none;
	}
	.download_icon{
	  width: 50px;
	  display: block;
	  margin-left: auto;
	  margin-right: auto
	}
	.download_text{
	  text-align: center;
	  font-size: 20px;
	  margin: 4px 0 4px 0;
	}
	html.phone .download_text{
	    font-size: 50px;
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

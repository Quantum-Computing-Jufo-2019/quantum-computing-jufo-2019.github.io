<template>
	<div class="section" id="third_section">
		<headline>Verlauf</headline>
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
		</div>
	</div>
</template>
<script>
	import Location from '~/components/Location.vue';
	import Date from '~/components/Date.vue';
	import News from '~/components/News.vue';
	import Gallery from '~/components/Gallery.vue'
	import GalleryImage from '~/components/GalleryImage.vue'
	import Spacer from '~/components/Spacer.vue'
	import Headline from '~/components/Headline.vue'

	export default {
		components: {
			Location,
			Date,
			News,
			Gallery,
			GalleryImage,
			Spacer,
			Headline,
		},
	};
</script>

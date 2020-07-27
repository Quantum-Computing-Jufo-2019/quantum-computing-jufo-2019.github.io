
export default {
	mode: 'spa',
	head: {
		title: 'Quantencomputer Projekt Jugend Forscht',
		meta: [
			{ charset: 'utf-8', },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1', },
			{ name: 'google-site-verification', content: '3muh7ZlUCWcxNvUuz4IPU5eLGjajeADIIrfic64nLLY', },
			{ hid: 'description', name: 'description', content: 'Informationen und Bilder zum Jugend Forscht Projekt über das Lösen von Optimierungsproblemen auf einem adiabatischen Quantencomputer. Von Paul Schappert, Jakov D. Wallbrecher und Jonathan Treffler', },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg', },
			{ rel: 'preload', href: '/fonts/POLYA.woff2', as: 'font', type: 'font/woff2', crossorigin: '', },
			{ rel: 'preconnect', href: 'https://www.google-analytics.com', },
		],
		script: [
			{
				src: 'https://cdn.jsdelivr.net/npm/mobile-detect@1.4.3/mobile-detect.min.js',
				type: 'text/javascript',
				async: true,
			},
			{
				src: 'https://www.googletagmanager.com/gtag/js?id=UA-139965444-1',
				type: 'text/javascript',
				async: true,
			},
		],
	},
	loading: { color: '#fff', },
	buildModules: [
		'@aceforth/nuxt-optimized-images',
	],
	optimizedImages: {
		optimizeImages: true,
	},
	modules: [
		'@nuxtjs/pwa',
	],
	pwa: {
		icon: {
	    iconSrc: "assets/logo.png"
	  }
	},
	build: {
		extend(config, ctx) {
		},
	},
};

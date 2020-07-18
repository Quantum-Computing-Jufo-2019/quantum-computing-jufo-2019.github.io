
export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'google-site-verification', content: '3muh7ZlUCWcxNvUuz4IPU5eLGjajeADIIrfic64nLLY' },
			{ name: 'Description', content: 'Informationen und Bilder zum Jugend Forscht Projekt über das Lösen von Optimierungsproblemen auf einem adiabatischen Quantencomputer. Von Paul Schappert, Jakov D. Wallbrecher und Jonathan Treffler' },
      { hid: 'description', name: 'description', content: 'Quantencomputer Jugend Forscht' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: "preload", href: "/fonts/POLYA.woff2", as: "font", type: "font/woff2", crossorigin: ""},
    ],
		script: [
				{
					src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
					type: "text/javascript"
				},
				{
					src: "https://cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js",
					type: "text/javascript"
				},
				{
					src: "https://cdn.jsdelivr.net/npm/mobile-detect@1.4.3/mobile-detect.min.js",
					type: "text/javascript"
				},
				{
					src: "https://cdn.jsdelivr.net/npm/sweetalert2@8",
					type: "text/javascript"
				},
				{
					src: "https://www.googletagmanager.com/gtag/js?id=UA-139965444-1",
					type: "text/javascript"
				},
		],
  },
  loading: { color: '#fff' },
	css: [
		"css/global.css"
	],
  plugins: [
  ],
	buildModules: [
    '@aceforth/nuxt-optimized-images',
  ],
  optimizedImages: {
    optimizeImages: true
  },
  modules: [
    '@nuxtjs/pwa',
  ],
  build: {
    extend (config, ctx) {
    }
  }
}

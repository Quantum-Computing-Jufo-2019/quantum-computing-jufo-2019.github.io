
export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
		script: [
				{
					src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
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
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  build: {
    extend (config, ctx) {
    }
  }
}

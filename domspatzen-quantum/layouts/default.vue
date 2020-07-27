<template>
	<div style="width: 100%; height: 100%;">
		<nuxt />
	</div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body, #__nuxt, #__layout {
	width: 100%;
	height: 100%;
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
	font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
}

h1 , h2 , h3 , h4 , h5{
	text-align: center;
}

@font-face {
	font-family: polya;
	src: url("/fonts/POLYA.woff2");
	font-display: swap;
}
</style>

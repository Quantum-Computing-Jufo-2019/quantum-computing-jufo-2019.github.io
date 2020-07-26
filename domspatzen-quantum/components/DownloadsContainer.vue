<template>
	<div id="downloads_flexbox">
		<slot />
	</div>
</template>
<style>
	#downloads_flexbox{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-right: 10%;
		margin-left: 10%;
	}
	html.phone #downloads_flexbox{
			flex-flow: column;
			flex-wrap: nowrap;
	}
</style>

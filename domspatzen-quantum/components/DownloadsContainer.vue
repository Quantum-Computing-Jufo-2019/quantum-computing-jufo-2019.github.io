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
	@media (pointer:none), (pointer:coarse) {
		#downloads_flexbox{
				flex-flow: column;
				flex-wrap: nowrap;
		}
	}
</style>

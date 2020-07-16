<template>
	<div id="cookie_alert">
			<p id="cookie_alert_headline">Darf diese Website Cookies verwenden?</p>
			<div id="cookie_alert_button_conatainer">
					<button class="cookie_alert_button" v-on:click="accept_cookies()">Ja</button>
					<button class="cookie_alert_button" v-on:click="decline_cookies()">Nein</button>
			</div>
	</div>
</template>
<script>
	export default {
		mounted: function() {
			this.check_cookie_permission();
		},
		methods: {
			run_google_analytics: function(){
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'UA-139965444-1');
			},
			check_cookie_permission: function(){
				if(this.getCookie("cookie_level") == ""){
					$("#cookie_alert").show();
				}else{
					this.cookies_accepted();
				}
			},
			cookies_accepted: function(){
				this.run_google_analytics();
			},
			accept_cookies: function(){
					this.setCookie("cookie_level","1",400);
					this.cookies_accepted();
					$("#cookie_alert").hide();
			},
			decline_cookies: function(){
					$("#cookie_alert").hide();
			},
			getCookie: function(cname) {
				var name = cname + "=";
				var decodedCookie = decodeURIComponent(document.cookie);
				var ca = decodedCookie.split(';');
				for(var i = 0; i <ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					}
					if (c.indexOf(name) == 0) {
						return c.substring(name.length, c.length);
					}
				}
				return "";
			},
			setCookie: function(cname, cvalue, exdays) {
				var d = new Date();
				d.setTime(d.getTime() + (exdays*24*60*60*1000));
				var expires = "expires="+ d.toUTCString();
				document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			},
		},
	};
</script>
<style>
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
</style>

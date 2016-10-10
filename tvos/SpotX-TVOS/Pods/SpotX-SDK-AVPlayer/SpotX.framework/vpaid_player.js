/* Copyright (c) 2016 SpotX. All rights reserved. */var global=(function(){return this||(1,eval)('this')})();!function(){var e=function(){var t=[],i=[],o={},d=function(d){if("undefined"!=typeof t[d])return t[d].exports;if(o={id:d,filename:d,parent:o,children:[],exports:{},loaded:!1},"undefined"==typeof i[d])throw new Error("The factory of "+d+" module not found");return t[d]=i[d](e,o.exports,o,"undefined"!=typeof window?window:global),t[d].loaded=!0,t[d].parent.children&&t[d].parent.children.push(t[d]),t[d].exports};return d.def=function(e,t){i[e]=t},d}();"undefined"==typeof require&&(require=e),e.def("build/public/typescript/tvos/v2/vpaid_player.js",function(e,t,i,o){var d=e("build/public/typescript/spotx/base/ad_event.js"),n=e("build/public/typescript/spotx/vpaid/vpaid_controller.js"),r=function(){function e(e){this.app=e,e.onLaunch=this.onLaunch.bind(this)}return e.prototype.onLaunch=function(e){var t=this,i=getVPAIDUrl(),d=getVPAIDExtensions();evaluateScripts([i],function(e){e||(console.log("Unable to load asset: "+i),exit());var r=o.getVPAIDAd&&o.getVPAIDAd()||o.alanche;t.controller=new n(t,r,d),t.controller.loadAd(1920,1080,"fullscreen",0,"","")})},e.prototype.onExit=function(){console.log("onExit")},e.prototype.onError=function(){console.log("onError")},e.prototype.onVpaidEvent=function(e){switch(e){case d[d.AdLoaded]:this.controller.playAd();break;case d[d.AdVideoComplete]:case d[d.AdError]:this.exit()}onVpaidEvent(e)},e.prototype.exit=function(){exit()},e}();new r(App);return i.exports=r,i}),e.def("build/public/typescript/spotx/base/ad_event.js",function(e,t,i,o){var d;return function(e){e[e.AdLoaded=0]="AdLoaded",e[e.AdStarted=1]="AdStarted",e[e.AdStopped=2]="AdStopped",e[e.AdSkipped=3]="AdSkipped",e[e.AdImpression=4]="AdImpression",e[e.AdVideoStart=5]="AdVideoStart",e[e.AdVideoFirstQuartile=6]="AdVideoFirstQuartile",e[e.AdVideoMidpoint=7]="AdVideoMidpoint",e[e.AdVideoThirdQuartile=8]="AdVideoThirdQuartile",e[e.AdVideoComplete=9]="AdVideoComplete",e[e.AdUserClose=10]="AdUserClose",e[e.AdPaused=11]="AdPaused",e[e.AdPlaying=12]="AdPlaying",e[e.AdError=13]="AdError",e[e.AdLinearChange=14]="AdLinearChange",e[e.AdExpandedChange=15]="AdExpandedChange",e[e.AdRemainingTimeChange=16]="AdRemainingTimeChange",e[e.AdInteraction=17]="AdInteraction",e[e.AdVolumeChange=18]="AdVolumeChange",e[e.AdClickThru=19]="AdClickThru",e[e.AdLog=20]="AdLog",e[e.AdSkippableStateChange=21]="AdSkippableStateChange",e[e.AD_EVENT_MAX=22]="AD_EVENT_MAX"}(d||(d={})),i.exports=d,i}),e.def("build/public/typescript/spotx/vpaid/vpaid_controller.js",function(e,t,i,o){var d=e("build/public/typescript/spotx/base/ad_event.js"),n=function(){function e(e,t,i){void 0===i&&(i={}),this.adStarted=!1,this.adPlaying=!1,this.view=e,this.vpaid=t,this.extensions=i,this.vpaid||this.dispose()}return e.prototype.dispose=function(){this.view.exit()},e.prototype.setTimer=function(e,t){void 0===e&&(e=5e3),void 0===t&&(t=null),this.clearTimer(),this.timer=setTimeout(this.timeout.bind(this,t),e)},e.prototype.clearTimer=function(){clearTimeout(this.timer),this.timer=0},e.prototype.timeout=function(e){void 0===e&&(e=""),console.log("NoSDK::TIMEOUT: "+e),this.dispose()},e.prototype.loadAd=function(e,t,i,o,n,r){this.version=this.vpaid.handshakeVersion("2.0",this.extensions);for(var a=d.AD_EVENT_MAX;a--;)this.subscribeTo(d[a],this.onVpaidEvent);this.setTimer(5e3,"Ad failed to initialize"),this.vpaid.initAd(e,t,i,o,n,r)},e.prototype.playAd=function(){this.adPlaying||(this.adStarted?(this.setTimer(5e3,"Ad failed to resume"),this.vpaid.resumeAd()):(this.setTimer(5e3,"Ad failed to start"),this.vpaid.startAd()))},e.prototype.pauseAd=function(){this.adPlaying&&(this.setTimer(5e3,"Ad failed to pause"),this.vpaid.pauseAd())},e.prototype.skipAd=function(){"2.0"==this.version&&(this.setTimer(5e3,"Ad failed to skip"),this.vpaid.skipAd())},e.prototype.stopAd=function(){this.adStarted&&(this.setTimer(5e3,"Ad failed to stop"),this.vpaid.stopAd())},e.prototype.resizeAd=function(e,t,i){this.setTimer(5e3,"Ad failed to resize"),this.vpaid.resizeAd(e,t,i)},e.prototype.getRemainingTime=function(){return this.vpaid.adRemainingTime||this.vpaid.getAdRemainingTime()||-1},e.prototype.getSkippableState=function(){return this.vpaid.adSkippableState||this.vpaid.getAdSkippableState()||!1},e.prototype.subscribeTo=function(e,t){this.vpaid.subscribe(t.bind(this,e),e)},e.prototype.onVpaidEvent=function(e){switch(this.clearTimer(),console.log("NoSDK::onVpaidEvent: "+e),e){case d[d.AdStarted]:this.adStarted=!0,this.adPlaying=!0;break;case d[d.AdPlaying]:this.adPlaying=!0;break;case d[d.AdPaused]:this.adPlaying=!1;break;case d[d.AdError]:console.log("NoSDK::onVpaidEvent:AdError:"+arguments[1]),this.adPlaying=!1}this.view.onVpaidEvent(e)},e}();return i.exports=n,i}),function(){e("build/public/typescript/tvos/v2/vpaid_player.js")}()}();
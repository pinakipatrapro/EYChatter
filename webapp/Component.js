sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"pinaki/ey/EYChatter/model/models",
	"pinaki/ey/EYChatter/api/firebaseConfig"
], function (UIComponent, Device, models,fcb) {
	"use strict";

	return UIComponent.extend("pinaki.ey.EYChatter.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			this.loadScript('https://www.gstatic.com/firebasejs/5.5.2/firebase.js');
			
		},
		loadScript :function (url) {
			document.body.appendChild(document.createElement("script")).src = url;
		}
	});
});
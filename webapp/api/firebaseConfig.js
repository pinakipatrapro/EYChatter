var config = {
	apiKey: "AIzaSyDdUEX1TvpUPNOYwbgJJkbeJs3cbJDhiSo",
	authDomain: "wst2-41b11.firebaseapp.com",
	databaseURL: "https://wst2-41b11.firebaseio.com",
	projectId: "wst2-41b11",
	storageBucket: "wst2-41b11.appspot.com",
	messagingSenderId: "163804485429"
};
setTimeout(function () {
	firebase.initializeApp(config);
}.bind(config), 10000)
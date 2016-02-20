// ==UserScript==
// @name        ProfileWizard
// @namespace   https://scratch.mit.edu/users/hiccup01
// @description Makes scratch profiles better
// @include     https://scratch.mit.edu/users/*
// @version     1.6
// @grant       none
// @updateURL http://www.hiccup01.com/js/userscripts/profile.user.js
// ==/UserScript==
console.log("Running ProfileWizard v1.6");
document.body.style.height = "auto";
var aboutme = document.getElementsByClassName(".about");
var status = document.querySelector("textarea[name=status]");
if (status === null) {
    status = document.getElementsByClassName("overview")[1];
}
var textarea = status.innerHTML;
var colour = textarea.substring((textarea.indexOf("§") + 1), (textarea.indexOf("§") + 8));
var url = textarea.substring((textarea.indexOf("≤") + 1), (textarea.indexOf("≥")));
colour.toString();
url = encodeURI(url);
var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colour);
if (isOk  === true || url != "" || null || "null" || undefined) {
if (isOk === true) {
	console.log("Set page colour to: " + colour);
	if (url != "" || null || "null" || undefined) {
		colour = colour.concat(" url(\"", url, "\") repeat");
	};
} else {
	colour = "#FFFFFF url(\"" + url + "\") repeat";
}
var bler = document.body.style.background = colour;
} else {
console.log("No colour found or invalid colour.");
}

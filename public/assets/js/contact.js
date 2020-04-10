/*
 The main reason to use this script is that the mailto
*/

"use strict";

document.querySelector("#contact-form").addEventListener("submit", sendEmail)

function sendEmail(event) {
	event.preventDefault();
	const firstName = document.querySelector("#first-name") ? document.querySelector("#first-name").value.trim() : null;
	const lastName = document.querySelector("#last-name") ? document.querySelector("#last-name").value.trim() : null;
	const message = document.querySelector("#message") ? document.querySelector("#message").value : null;


	if (null === firstName || null === lastName || null === message) {
		alert("You should not be messing with the site 😤");
		location.reload();
	}

	if (firstName.length < 1 || lastName.length < 1 || message.length < 1 ) {
		alert("All the fields are required 😜");
		return;
	}

	const fullName = `${firstName} ${lastName}`;
	const email = "evrtrabajo@gmail.com";

	const mailto = encodeURI(`mailto:${email}?subject=${fullName}&body=${message}`);
	window.open(mailto, '_blank');
}


"use strict";

document.querySelector("#contact-form").addEventListener("submit", sendEmail)

function sendEmail(event) {
	event.preventDefault();
	const firstName = document.querySelector("#first-name").value;
	const lastName = document.querySelector("#last-name").value;
	const fullName = `${firstName} ${lastName}`;
	const message = document.querySelector("#message").value;
	const mailto = encodeURI(`mailto:evrtrabajo@gmail.com?subject=${fullName}&body=${message}`);
	location.href=mailto;
}


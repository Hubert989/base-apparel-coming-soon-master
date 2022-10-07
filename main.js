const emailForm = document.getElementById("email-form");
const emailButton = document.getElementById("email-button");

emailButton.addEventListener("click", checkUserInput);

function checkUserInput(e) {
	e.preventDefault();
	const userInput = document.getElementById("user-input").value;
	console.log(userInput);
	if (!ValidateEmail(userInput)) {
		emailForm.classList.add("error");
	} else {
		emailForm.classList.remove("error");
		emailForm.classList.add("success");
		document.getElementById("user-input").value = "";
		setTimeout(function () {
			emailForm.classList.remove("success");
		}, 2000);
	}
}

function ValidateEmail(userEmail) {
	const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return userEmail.match(mailformat);
}

/*
let email = document.getElementById("email");
let dangerIcon = document.getElementById('danger-button');
let dangerText = document.getElementById("danger-text");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        dangerIcon.style.opacity = 1;
        dangerText.style.opacity = 1;
        email.style.border = "2px solid red";
    } else {
        dangerIcon.style.opacity = 0;
        dangerText.style.opacity = 0;
    }
})
*/

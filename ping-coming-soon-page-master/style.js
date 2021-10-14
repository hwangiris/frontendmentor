var button = document.querySelector("button");

button.addEventListener('click', e => {
	e.preventDefault();
	ValidateEmail(document.form.email);
});

function ValidateEmail(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if( inputText.value.match(mailformat) ) {
		// alert("Valid email address!");
		document.form.classList.remove('error');
		return true;
	} else {
		// alert("You have entered an invalid email address!");
		document.form.classList.add('error');
		return false;
	}
}

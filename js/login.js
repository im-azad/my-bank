document.getElementById('login-submit').addEventListener('click', function () {
	// get email field value and password
	const emailField = document.getElementById('user-email');
	const passField = document.getElementById('user-password');
	const userEmail = emailField.value;
	const userPassword = passField.value;

	if (userEmail == 'azad@gmail.com' && userPassword == 'azad') {
		window.location.href = 'bank.html';
	} else {
		alert('Email or Password not correct?');
	}
});

// Get the modal
var modal = document.getElementById('myModal');

//TAMAYO
var tamayoBox = document.getElementById('some');
var tamayoModal = document.getElementById('tamayoModal');
var tamayoclose = document.getElementById('tamayoclose');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var closebtn = document.getElementsByClassName('close')[0];

var submitbtn = document.getElementsByClassName('submit')[0];

var nameField = document.getElementById('firstname');
var lastNameField = document.getElementById('lastname');
var emailField = document.getElementById('email');
var numberField = document.getElementById('number');
var checkboxes = document.getElementsByClassName('datecheckbox');

tamayoBox.onclick = _ => {
	tamayoModal.style.display = 'block';
};
tamayoclose.onclick = _ => {
	tamayoModal.style.display = 'none';
};

// When the user clicks the button, open the modal
btn.onclick = _ => {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closebtn.onclick = _ => {
	modal.style.display = 'none';
	resetFields();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
	if (event.target == modal) {
		modal.style.display = 'none';
		resetFields();
	}
};

submitbtn.onclick = _ => {
	var name = nameField.value;
	var lastName = lastNameField.value;
	var email = emailField.value;
	var number = numberField.value;

	var validateForm = function() {
		var checks = $('input[type="checkbox"]:checked')
			.map(function() {
				return $(this).val();
			})
			.get();
		//console.log(checks);
		return checks;
	};

	console.log(name + ' ' + lastName + ': ' + email);
	console.log(validateForm());
};

function resetFields() {
	var name = (nameField.value = '');
	var lastName = (lastNameField.value = '');
	var email = (emailField.value = '');
	var number = (numberField.value = '+52');
	$('input[type="checkbox"]').prop('checked', false);
}

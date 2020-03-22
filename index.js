// Get the modal
var modal = document.getElementById('myModal');

//TAMAYO
var tamayoBox = document.getElementById('some');
var tamayoModal = document.getElementById('tamayoModal');
var tamayoclose = document.getElementById('tamayoclose');
tamayoBox.onclick = _ => {
	tamayoModal.style.display = 'block';
};
tamayoclose.onclick = _ => {
	tamayoModal.style.display = 'none';
};

//MAM
var MAMbox = document.getElementById('some2');
var MAMmodal = document.getElementById('MAMmodal');
var MAMclose = document.getElementById('MAMclose');
MAMbox.onclick = _ => {
	MAMmodal.style.display = 'block';
};
MAMclose.onclick = _ => {
	MAMmodal.style.display = 'none';
};

//MNA
var MNAbox = document.getElementById('some3');
var MNAmodal = document.getElementById('MNAmodal');
var MNAclose = document.getElementById('MNAclose');
MNAbox.onclick = _ => {
	MNAmodal.style.display = 'block';
};
MNAclose.onclick = _ => {
	MNAmodal.style.display = 'none';
};

//JUMEX
var Jumexbox = document.getElementById('some4');
var Jumexmodal = document.getElementById('Jumexmodal');
var Jumexclose = document.getElementById('Jumexclose');
Jumexbox.onclick = _ => {
	Jumexmodal.style.display = 'block';
};
Jumexclose.onclick = _ => {
	Jumexmodal.style.display = 'none';
};

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
	if (event.target == tamayoModal) {
		tamayoModal.style.display = 'none';
	}
	if (event.target == MAMmodal) {
		MAMmodal.style.display = 'none';
	}
	if (event.target == MNAmodal) {
		MNAmodal.style.display = 'none';
	}
	if (event.target == Jumexmodal) {
		Jumexmodal.style.display = 'none';
	}
};

submitbtn.onclick = _ => {
	var name = nameField.value;
	var lastName = lastNameField.value;
	var email = emailField.value;
	var number = numberField.value;

	console.log(name + ' ' + lastName + ': ' + email);
	var checkedDates = validateForm();

	for (let i = 0; i < checkedDates.length; i++) {
		console.log(checkedDates[i]);
	}
};

function resetFields() {
	var name = (nameField.value = '');
	var lastName = (lastNameField.value = '');
	var email = (emailField.value = '');
	var number = (numberField.value = '+52');
	$('input[type="checkbox"]').prop('checked', false);
}

function validateForm() {
	var checks = $('input[type="checkbox"]:checked')
		.map(function() {
			return $(this).val();
		})
		.get();
	return checks;
}

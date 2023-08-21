function setDate() {
	document.getElementById('resdate').innerHTML = document.getElementById('date').value;
	document.getElementById('resdate1').value = document.getElementById('date').value;
}

function setTime(Elmval) {
	if (Elmval == 'time78') { document.getElementById("time78").checked = true; document.getElementById('restime').innerHTML = "07.00 am - 08.00 am"; document.getElementById('resdurat1').value = "07.00 am - 08.00 am"; document.getElementById('restime1').value = "time78"; document.getElementById('restimepkoffpk').value = 0; } else { document.getElementById("time78").checked = false; }
	if (Elmval == 'time89') { document.getElementById("time89").checked = true; document.getElementById('restime').innerHTML = "08.00 am - 09.00 am"; document.getElementById('resdurat1').value = "08.00 am - 09.00 am"; document.getElementById('restime1').value = "time89"; document.getElementById('restimepkoffpk').value = 0; } else { document.getElementById("time89").checked = false; }
	if (Elmval == 'time910') { document.getElementById('time910').checked = true; document.getElementById('restime').innerHTML = "09.00 am - 10.00 am"; document.getElementById('resdurat1').value = "09.00 am - 10.00 am"; document.getElementById('restime1').value = "time910"; document.getElementById('restimepkoffpk').value = 0; } else { document.getElementById('time910').checked = false; }
	if (Elmval == 'time1011') { document.getElementById('time1011').checked = true; document.getElementById('restime').innerHTML = "10.00 am - 11.00 am (peak)"; document.getElementById('resdurat1').value = "10.00 am - 11.00 am (peak)"; document.getElementById('restime1').value = "time1011"; document.getElementById('restimepkoffpk').value = 1; } else { document.getElementById('time1011').checked = false; }
	if (Elmval == 'time1112') { document.getElementById('time1112').checked = true; document.getElementById('restime').innerHTML = "11.00 am - 12.00 am (peak)"; document.getElementById('resdurat1').value = "11.00 am - 12.00 am (peak)"; document.getElementById('restime1').value = "time1112"; document.getElementById('restimepkoffpk').value = 1; } else { document.getElementById('time1112').checked = false; }
	if (Elmval == 'time1213') { document.getElementById('time1213').checked = true; document.getElementById('restime').innerHTML = "12.00 pm - 13.00 pm (peak)"; document.getElementById('resdurat1').value = "12.00 pm - 13.00 pm (peak)"; document.getElementById('restime1').value = "time1213"; document.getElementById('restimepkoffpk').value = 1; } else { document.getElementById('time1213').checked = false; }
	if (Elmval == 'time1314') { document.getElementById('time1314').checked = true; document.getElementById('restime').innerHTML = "13.00 pm - 14.00 pm"; document.getElementById('resdurat1').value = "13.00 pm - 14.00 pm"; document.getElementById('restime1').value = "time1314"; document.getElementById('restimepkoffpk').value = 0; } else { document.getElementById('time1314').checked = false; }
	if (Elmval == 'time1415') { document.getElementById('time1415').checked = true; document.getElementById('restime').innerHTML = "14.00 pm - 15.00 pm"; document.getElementById('resdurat1').value = "14.00 pm - 15.00 pm"; document.getElementById('restime1').value = "time1415"; document.getElementById('restimepkoffpk').value = 0; } else { document.getElementById('time1415').checked = false; }
	if (Elmval == 'time1516') { document.getElementById('time1516').checked = true; document.getElementById('restime').innerHTML = "15.00 pm - 16.00 pm (peak)"; document.getElementById('resdurat1').value = "15.00 pm - 16.00 pm (peak)"; document.getElementById('restime1').value = "time1516"; document.getElementById('restimepkoffpk').value = 1; } else { document.getElementById('time1516').checked = false; }
	if (Elmval == 'time1617') { document.getElementById('time1617').checked = true; document.getElementById('restime').innerHTML = "16.00 pm - 17.00 pm (peak)"; document.getElementById('resdurat1').value = "16.00 pm - 17.00 pm (peak)"; document.getElementById('restime1').value = "time1617"; document.getElementById('restimepkoffpk').value = 1; } else { document.getElementById('time1617').checked = false; }
	if (Elmval == 'time1718') { document.getElementById('time1718').checked = true; document.getElementById('restime').innerHTML = "17.00 pm - 18.00 pm (peak)"; document.getElementById('resdurat1').value = "17.00 pm - 18.00 pm (peak)"; document.getElementById('restime1').value = "time1718"; document.getElementById('restimepkoffpk').value = 1; } else { document.getElementById('time1718').checked = false; }
	setPax();
	setFinalPpay();
}

function setPax() {
	if (document.getElementById('restime1').value == '') {  //--No Selected Time Schedule

		if (document.getElementById('fradults').value != "") {
			document.getElementById('fradl').innerHTML = document.getElementById('fradults').value;
			document.getElementById('fradl1').value = document.getElementById('fradults').value;
		}

		if (document.getElementById('frchild').value != "") {
			document.getElementById('frchildx').innerHTML = document.getElementById('frchild').value;
			document.getElementById('frchildx1').value = document.getElementById('frchild').value;
		}

		if (document.getElementById('sladults').value != "") {
			document.getElementById('sladl').innerHTML = document.getElementById('sladults').value;
			document.getElementById('sladl1').value = document.getElementById('sladults').value;
		}
		if (document.getElementById('slchild').value != "") {
			document.getElementById('slchildx').innerHTML = document.getElementById('slchild').value;
			document.getElementById('slchildx1').value = document.getElementById('slchild').value;
		}
		if (document.getElementById('infants').value != "") {
			document.getElementById('intantsx').innerHTML = document.getElementById('infants').value;
			document.getElementById('intantsx1').value = document.getElementById('infants').value;
		}

	} else {  ////--Selected Time Schedule
		if (document.getElementById('restimepkoffpk').value == 0) {  //---Off Peak

			if (document.getElementById('fradults').value != "") {
				document.getElementById('fradl1').value = document.getElementById('fradults').value;
				document.getElementById('fradlamt1').value = document.getElementById('payfradln').value;
				var ElmStot = parseFloat(document.getElementById('fradults').value) * parseFloat(document.getElementById('payfradln').value);
				document.getElementById('fradl').innerHTML = document.getElementById('fradults').value + " x " + document.getElementById('payfradln').value + " USD  = " + ElmStot + " USD";
			}

			if (document.getElementById('frchild').value != "") {
				document.getElementById('frchildx1').value = document.getElementById('frchild').value;
				document.getElementById('frchildamt1').value = document.getElementById('payfrchln').value;
				var ElmStot = parseFloat(document.getElementById('frchild').value) * parseFloat(document.getElementById('payfrchln').value);
				document.getElementById('frchildx').innerHTML = document.getElementById('frchild').value + " x " + document.getElementById('payfrchln').value + " USD  = " + ElmStot + " USD";
			}

			if (document.getElementById('sladults').value != "") {
				document.getElementById('sladl1').value = document.getElementById('sladults').value;
				document.getElementById('sladlamt1').value = document.getElementById('paysladln').value;
				var ElmStot = parseFloat(document.getElementById('sladults').value) * parseFloat(document.getElementById('paysladln').value);
				document.getElementById('sladl').innerHTML = document.getElementById('sladults').value + " x " + document.getElementById('paysladln').value + " USD  = " + ElmStot + " USD";
			}
			if (document.getElementById('slchild').value != "") {
				document.getElementById('slchildx1').value = document.getElementById('slchild').value;
				document.getElementById('slchildamt1').value = document.getElementById('payslchln').value;
				var ElmStot = parseFloat(document.getElementById('slchild').value) * parseFloat(document.getElementById('payslchln').value);
				document.getElementById('slchildx').innerHTML = document.getElementById('slchild').value + " x " + document.getElementById('payslchln').value + " USD  = " + ElmStot + " USD";
			}
			if (document.getElementById('infants').value != "") {
				document.getElementById('intantsx').innerHTML = document.getElementById('infants').value + " x " + 0;
				document.getElementById('intantsx1').value = document.getElementById('slchild').value;
				document.getElementById('intantsamt1').value = 0;
				//				var ElmStot = parseFloat(document.getElementById('slchild').value) * parseFloat(0);
			}
		} else if (document.getElementById('restimepkoffpk').value == 1) {  //---Peak
			if (document.getElementById('fradults').value != "") {
				document.getElementById('fradl1').value = document.getElementById('fradults').value;
				document.getElementById('fradlamt1').value = document.getElementById('payfradlp').value;
				var ElmStot = parseFloat(document.getElementById('fradults').value) * parseFloat(document.getElementById('payfradlp').value);
				document.getElementById('fradl').innerHTML = document.getElementById('fradults').value + " x " + document.getElementById('payfradlp').value + " USD  = " + ElmStot + " USD";
			}

			if (document.getElementById('frchild').value != "") {
				document.getElementById('frchildx1').value = document.getElementById('frchild').value;
				document.getElementById('frchildamt1').value = document.getElementById('payfrchlp').value;
				var ElmStot = parseFloat(document.getElementById('frchild').value) * parseFloat(document.getElementById('payfrchlp').value);
				document.getElementById('frchildx').innerHTML = document.getElementById('frchild').value + " x " + document.getElementById('payfrchlp').value + " USD  = " + ElmStot + " USD";
			}

			if (document.getElementById('sladults').value != "") {
				document.getElementById('sladl1').value = document.getElementById('sladults').value;
				document.getElementById('sladlamt1').value = document.getElementById('paysladlp').value;
				var ElmStot = parseFloat(document.getElementById('sladults').value) * parseFloat(document.getElementById('paysladlp').value);
				document.getElementById('sladl').innerHTML = document.getElementById('sladults').value + " x " + document.getElementById('paysladlp').value + " USD  = " + ElmStot + " USD";
			}
			if (document.getElementById('slchild').value != "") {
				document.getElementById('slchildx1').value = document.getElementById('slchild').value;
				document.getElementById('slchildamt1').value = document.getElementById('payslchlp').value;
				var ElmStot = parseFloat(document.getElementById('slchild').value) * parseFloat(document.getElementById('payslchlp').value);
				document.getElementById('slchildx').innerHTML = document.getElementById('slchild').value + " x " + document.getElementById('payslchlp').value + " USD  = " + ElmStot + " USD";
			}
			if (document.getElementById('infants').value != "") {
				document.getElementById('intantsx').innerHTML = document.getElementById('infants').value + " x " + 0;
				document.getElementById('intantsx1').value = document.getElementById('slchild').value;
				document.getElementById('intantsamt1').value = 0;
				//				var ElmStot = parseFloat(document.getElementById('slchild').value) * parseFloat(0);
			}
		}
	}

	setFinalPpay();
}

function setFinalPpay() {
	var ElmStot1 = parseFloat(document.getElementById('fradl1').value) * parseFloat(document.getElementById('fradlamt1').value);
	var ElmStot2 = parseFloat(document.getElementById('frchildx1').value) * parseFloat(document.getElementById('frchildamt1').value);
	var ElmStot3 = parseFloat(document.getElementById('sladl1').value) * parseFloat(document.getElementById('sladlamt1').value);
	var ElmStot4 = parseFloat(document.getElementById('slchildx1').value) * parseFloat(document.getElementById('slchildamt1').value);
	var ElmTotal = parseFloat(ElmStot1) + parseFloat(ElmStot2) + parseFloat(ElmStot3) + parseFloat(ElmStot4);
	document.getElementById('totpayab1').value = ElmTotal;
	document.getElementById('totpayab').innerHTML = ElmTotal + " USD";
}

//// Selecting form and input elements
//const form = document.querySelector("form");
//const passToggleBtn = document.getElementById("pass-toggle-btn");
//// Function to display error messages
//const showError = (field, errorText) => {
//    field.classList.add("error");
//    const errorElement = document.createElement("small");
//    errorElement.classList.add("error-text");
//    errorElement.innerText = errorText;
//    field.closest(".form-group").appendChild(errorElement);
//}
//// Function to handle form submission
//const handleFormData = (e) => {
//    e.preventDefault();
//    // Retrieving input elements
//    const fullnameInput = document.getElementById("fullname");
//    const emailInput = document.getElementById("email");
//    const confirmEmailInput = document.getElementById("confirmemail");
//    const genderInput = document.getElementById("gender");
//    // Getting trimmed values from input fields
//    const fullname = fullnameInput.value.trim();
//    const email = emailInput.value.trim();
//    const confirmemail = confirmEmailInput.value.trim();
//    const gender = genderInput.value;
//    // Regular expression pattern for email validation
//    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//    const confirmEmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//    // Clearing previous error messages
//    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
//    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
//    // Performing validation checks
//    if (fullname === "") {
//        showError(fullnameInput, "Enter your full name");
//    }
//    if (!emailPattern.test(email)) {
//        showError(emailInput, "Enter a valid email address");
//    }
//    if (!confirmEmailPattern.test(confirmemail)) {
//        showError(confirmEmailInput, "Enter a valid email address");
//    }
//    if (gender === "") {
//        showError(genderInput, "Select your gender");
//    }
//    // Checking for any remaining errors before form submission
//    const errorInputs = document.querySelectorAll(".form-group .error");
//    if (errorInputs.length > 0) return;
//    // Submitting the form
//    form.submit();
//}
//
//// Handling form submission event
//form.addEventListener("submit", handleFormData);
//
//const phoneInputField = document.querySelector("#phone");
//const phoneInput = window.intlTelInput(phoneInputField, {
//    utilsScript:
//        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//});
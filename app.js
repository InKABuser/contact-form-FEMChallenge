const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const radio1 = document.getElementById('General');
const radio2 = document.getElementById('Support');
const messageText = document.getElementById('Message')
const consent = document.getElementById('consent');

const succesMessage = document.getElementById('Success-Message');
const MAIN_FORM = document.getElementById('FORM');


MAIN_FORM.onsubmit = function(e) {
   
   let isFormValid = inputCheck();
   if (!isFormValid) {
    e.preventDefault();
   } else {
    succesMessage.style.display = 'grid';
    setTimeout(() => {
        console.log("Timeout executed");  // Debugging log
        succesMessage.style.display = 'none';
        MAIN_FORM.reset(); // Reset the form
    }, 5000); // 5 seconds
   }
}

function inputCheck () {
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const messagetextValue = messageText.value.trim();
    const radio1Checked = radio1.checked;
    const radio2Checked = radio2.checked;
    const consentChecked = consent.checked;

    let firstHint = document.getElementsByClassName('First-hint')[0];
    let lastHint = document.getElementsByClassName('last-hint')[0];
    let emailHint = document.getElementsByClassName('emailHint')[0];
    let msgHint = document.getElementsByClassName('msgHint')[0];
    let RadioHint = document.getElementsByClassName('radioHint')[0];
    let centHint = document.getElementsByClassName('centHint')[0];

    let isValid = true;

    if (firstnameValue === "") {
        firstHint.style.display = 'block';
        setErrorState(firstName);
        isValid = false;

    } else {
        setSuccessState(firstName);
        firstHint.style.display = 'none';
    }

    if (lastnameValue === "") {
        lastHint.style.display = 'block';
        setErrorState(lastName);
        isValid = false;

    } else {
        setSuccessState(lastName);
        lastHint.style.display = 'none';
    }

    if (!isValidEmail(emailValue)) {
        emailHint.style.display = 'block';
        setErrorState(email);
        isValid = false;
    } else {
        emailHint.style.display = 'none';
        setSuccessState(email);
    }

    if (!radio1Checked && !radio2Checked) {
        // Handle radio button validation error
        RadioHint.style.display = 'block';
        isValid = false;
    } else {
        RadioHint.style.display = 'none';
    }
    if (messagetextValue === "") {
        msgHint.style.display = "block";
        isValid = false;
    } else {
        msgHint.style.display = 'none';
    }

    if (!consentChecked) {
        // Handle consent checkbox validation error
        centHint.style.display ='block';
        isValid = false;
    } else {
        centHint.style.display = 'none';
    }

    return isValid;
}


function setErrorState(element) {
    // Your error state logic here
    element.classList.add('erorr')
}
function setSuccessState(element) {
    // Your success state logic here
    element.classList.remove('erorr');
}


function isValidEmail(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



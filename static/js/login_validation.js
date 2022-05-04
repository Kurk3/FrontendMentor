// create a login validation
// fix the bug with value of the input in typescript
var login_form = document.getElementById('login-form');
var login_name = document.getElementById("login-name");
var login_name_label = document.getElementById("active-label-username");
var login_name_message = document.getElementById("login-username-message");
var login_password = document.getElementById("login-password");
var login_button = document.getElementById("login-button");
var errorElement = document.getElementById('error');
//     if (login_password.value.match(/[0-9]/g) || login_password.value.match(/[a-d]/g)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// create a function to validate the login
function validateLogin(e) {
    var messages = [];
    e.preventDefault();
    if (login_name.value === "") {
        login_name.style.border = "3px solid red";
        //insert content in the label
        login_name_label.innerHTML = "Username is required";
        // alert("Please enter your name");
        // console.log(messages.push('Name is required'));
    }
    else if (validate_login_name() === false) {
        alert("Symbols not allowed");
        console.log(messages.push('Your name contain bad char'));
    }
    else if (login_password.value === "") {
        alert("Please enter your password");
        console.log(messages.push('Password is required'));
    }
    else if (login_password.value.match(/[0-9]/g) === null) {
        alert("Password must contain at least one number");
        console.log(messages.push('Password must contian at least one number'));
    }
    else if (login_password.value.match(/[A-Z]/g) === null) {
        alert("Password must contain at least one uppercase letter");
        console.log(messages.push('Password must contian at least one uppercase letter'));
    }
    else if (login_password.value.length < 6) {
        alert("Password must be longer than 6 characters");
        console.log(messages.push('Password must be longer than 6 characters'));
    }
    else if (1 == 1) {
        login_form.submit();
    }
    else if (messages.length > 0) {
        errorElement.innerHTML = messages.join(', ');
    }
    else {
        alert("Login successfully");
    }
}
//add event listener to the login_button
// login_button.addEventListener("", validateLogin);
login_form.addEventListener('submit', function (e) {
    validateLogin(e);
});
function validate_login_name() {
    if (login_name.value.match(/[0-9]/g) || login_name.value.match(/[a-d]/g)) {
        return true;
    }
    else {
        return false;
    }
}

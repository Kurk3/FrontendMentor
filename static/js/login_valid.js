const login_form = document.getElementById('login-form');
const login_name = document.getElementById("login-name");
const login_password = document.getElementById("login-password");


const login_username_message = document.getElementById("login-username-message");
const active_label_username = document.getElementById("active-label-username");


const login_password_message = document.getElementById("login-password-message");
const active_label_password = document.getElementById("active-label-password");


login_form.addEventListener('submit', (e) => {
    let messages = [];
    e.preventDefault();
    if (login_name.value === "") {
        messages.push("Please enter your username");
        // change border of input field to red


        login_name.style.border = "3px solid red";
        active_label_username.style.color = "red";
        login_username_message.innerHTML = "Enter your username.";

        setTimeout(() => {
            login_username_message.innerHTML = null;
            active_label_username.style.color = "black";
            login_name.style.border = "3px solid black";
        }, 3000);


    } else if (login_name.value.length <= 3) {

        console.log(messages.push('Your name contain bad char'));
        login_name.style.border = "3px solid red";
        active_label_username.style.color = "red";
        login_username_message.innerHTML = "Username is too short.";

        setTimeout(() => {
            login_username_message.innerHTML = null;
            active_label_username.style.color = "black";
            login_name.style.border = "3px solid black";
        }, 3000);

    } else if (login_name.value.length >= 20) {

        console.log(messages.push('Your name contain bad char'));
        login_name.style.border = "3px solid red";
        active_label_username.style.color = "red";
        login_username_message.innerHTML = "Username is too long.";

        setTimeout(() => {
            login_username_message.innerHTML = null;
            active_label_username.style.color = "black";
            login_name.style.border = "3px solid black";
        }, 3000);

    } else if (login_password.value === "") {

        login_password.style.border = "3px solid red";
        active_label_password.style.color = "red";
        login_password_message.innerHTML = "Enter your password.";

        login_name.style.border = "3px solid green";
        active_label_username.style.color = "green";
        login_username_message.style.color = "green";
        login_username_message.innerHTML = "Username is valid.";

        setTimeout(() => {
            login_password_message.innerHTML = null;
            active_label_password.style.color = "black";
            login_password.style.border = "3px solid black";
        }, 5000);

        console.log(messages.push('Password is required'));
    } else if (login_password.value.match(/[0-9]/g) === null) {

        login_password.style.border = "3px solid red";
        active_label_password.style.color = "red";
        login_password_message.innerHTML = "Must contain number.";

        login_name.style.border = "3px solid green";
        active_label_username.style.color = "green";
        login_username_message.style.color = "green";
        login_username_message.innerHTML = "Username is valid.";


        //change login username message to green


        setTimeout(() => {
            login_password_message.innerHTML = null;
            active_label_password.style.color = "black";
            login_password.style.border = "3px solid black";
        }, 5000);

        console.log(messages.push('Password must contain at least one number'));
    } else if (login_password.value.length < 6) {

        login_password.style.border = "3px solid red";
        active_label_password.style.color = "red";
        login_password_message.innerHTML = "Password is too short.";

        login_name.style.border = "3px solid green";
        active_label_username.style.color = "green";
        login_username_message.style.color = "green";
        login_username_message.innerHTML = "Username is valid.";

        console.log(messages.push('Password must be longer than 6 characters'));
    } else {
        login_form.submit();
    }

    if (messages.length > 0) {
        e.preventDefault();
        // errorElement.innerHTML = messages.join(', ');
    } else {
        window.location.href = '/sucess'; // redirectne na specificku stranku ked sa vsetko toto splni v tom javascripte.
    }
});


// function validate_login_name() {
//     if (login_name.value.match(/[0-9]/g) || login_name.value.match(/[a-d]/g) || login_name.value.match(/[A-Z]/g)) {
//         return true;
//     } else {
//         return false;
//     }
// }
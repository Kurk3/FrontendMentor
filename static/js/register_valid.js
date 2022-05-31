// create element register_form
const register_form = document.getElementById('register-form');

const username_register_label = document.getElementById('username-register-label');
const username_register_input = document.getElementById('username-register-input');
const username_register_message = document.getElementById('username-register-message');

const password_register_label = document.getElementById('password-register-label');
const password_register_input = document.getElementById('password-register-input');
const password_register_message = document.getElementById('password-register-message');

const confirm_password_register_label = document.getElementById('confirm-password-register-label');
const confirm_password_register_input = document.getElementById('confirm-password-register-input');
const confirm_password_register_message = document.getElementById('confirm-password-register-message');

const email_register_label = document.getElementById('email-register-label');
const email_register_input = document.getElementById('email-register-input');
const email_register_message = document.getElementById('email-register-message');

const who_is_your_best_friend_label = document.getElementById('who-is-your-best-friend-label');
const who_is_your_best_friend_input = document.getElementById('who-is-your-best-friend-input');
const who_is_your_best_friend_message = document.getElementById('who-is-your-best-friend-message');


register_form.addEventListener('submit', (e) => {
    let messages = [];
    e.preventDefault();


    if (username_register_input.value === "") {
        // reset_valid();
        valid();

        username_register_input.style.border = "3px solid red";
        username_register_label.style.color = "red";
        username_register_message.innerHTML = "Enter your username.";

        messages.push("Please enter your username");

        setTimeout(() => {
            username_register_message.innerHTML = null;
            username_register_label.style.color = "black";
            username_register_input.style.border = "3px solid black";
        }, 3000);

    } else if (username_register_input.value.length <= 3) {
        // reset_valid();
        valid();

        username_register_input.style.border = "3px solid red";
        username_register_label.style.color = "red";
        username_register_message.innerHTML = "Username is too short.";

        console.log(messages.push('Your name contain bad char'));

        setTimeout(() => {
            username_register_message.innerHTML = null;
            username_register_label.style.color = "black";
            username_register_input.style.border = "3px solid black";
        }, 3000);


    } else if (username_register_input.value.length >= 20) {
        valid();

        username_register_input.style.border = "3px solid red";
        username_register_label.style.color = "red";
        username_register_message.innerHTML = "Username is too long.";

        console.log(messages.push('Your name contain bad char'));

        setTimeout(() => {
            reset_valid();
        }, 3000);

    } else if (password_register_input.value === "") {
        valid();

        password_register_input.style.border = "3px solid red";
        password_register_label.style.color = "red";
        password_register_message.innerHTML = "Enter your password.";

        console.log(messages.push('Password is required'));

        setTimeout(() => {
            // password_register_message.innerHTML = null;
            // password_register_label.style.color = "black";
            // password_register_input.style.border = "3px solid black";
            reset_valid();
        }, 3000);


    } else if (password_register_input.value.match(/[0-9]/g) === null) {
        // reset_valid();
        valid();

        password_register_input.style.border = "3px solid red";
        password_register_label.style.color = "red";
        password_register_message.innerHTML = "Password must contain number.";

        console.log(messages.push('Password must contain at least one number'));

        setTimeout(() => {
            // password_register_message.innerHTML = null;
            // password_register_label.style.color = "black";
            // password_register_input.style.border = "3px solid black";
        }, 3000);


    } else if (password_register_input.value.length < 6) {
        // reset_valid();
        valid();

        password_register_input.style.border = "3px solid red";
        password_register_label.style.color = "red";
        password_register_message.innerHTML = "Password is too short.";

        console.log(messages.push('Password must be longer than 6 characters'));

        setTimeout(() => {
            // password_register_message.innerHTML = null;
            // password_register_label.style.color = "black";
            // password_register_input.style.border = "3px solid black";
            reset_valid();
        }, 3000);

    } else if (confirm_password_register_input.value === "") {
        valid();

        confirm_password_register_input.style.border = "3px solid red";
        confirm_password_register_label.style.color = "red";
        confirm_password_register_message.innerHTML = "Confirm your password.";

        console.log(messages.push('Confirm password is required'));

        setTimeout(() => {
            confirm_password_register_message.innerHTML = null;
            confirm_password_register_label.style.color = "black";
            confirm_password_register_input.style.border = "3px solid black";
        }, 3000);

    } else if (confirm_password_register_input.value !== password_register_input.value) {

        valid();

        confirm_password_register_input.style.border = "3px solid red";
        confirm_password_register_label.style.color = "red";
        confirm_password_register_message.innerHTML = "Passwords do not match.";


        console.log(messages.push('Password does not match'));

        setTimeout(() => {
            reset_valid();
        }, 3000);
        // }

    } else if (email_register_input.value === "") {
        valid();

        email_register_input.style.border = "3px solid red";
        email_register_label.style.color = "red";
        email_register_message.innerHTML = "Enter your email.";

        console.log(messages.push('Email cannot be empty.'));

        setTimeout(() => {
            reset_valid();
        }, 3000);

    } else if (email_register_input.value.indexOf("@") === -1) {
        // reset_valid();
        valid();

        email_register_input.style.border = "3px solid red";
        email_register_label.style.color = "red";
        email_register_message.innerHTML = "Email must contain @";


        console.log(messages.push('Email cant be empty'));


    } else if (email_register_input.value.indexOf(".") === -1) {
        // reset_valid();
        valid();

        email_register_input.style.border = "3px solid red";
        email_register_label.style.color = "red";
        email_register_message.innerHTML = "Email must contain .";


        console.log(messages.push('Email must contain .'));


    } else if (who_is_your_best_friend_input.value === "") {
        valid();
        who_is_your_best_friend_input.style.border = "3px solid red";
        who_is_your_best_friend_label.style.color = "red";

        console.log(messages.push('Please enter your best friend\'s name'));


    } else {
        console.log(messages.push('Registration successful'));
        register_form.submit();
        window.location.href = '/homepage_after';
        //window.location.href = '/success';
    }

    if (messages.length > 0) {
        e.preventDefault();
        // errorElement.innerHTML = messages.join(', ');
    } else {

    }
});

function valid_username() {
    username_register_message.style.color = "green";
    username_register_message.innerHTML = "Username is valid.";
    username_register_input.style.border = "3px solid green";
    username_register_label.style.color = "green";
}

function valid_password() {
    password_register_message.style.color = "green";
    password_register_message.innerHTML = "Password is valid.";
    password_register_input.style.border = "3px solid green";
    password_register_label.style.color = "green";
}

function valid_confirm_password() {
    confirm_password_register_message.style.color = "green";
    confirm_password_register_message.innerHTML = "Passwords match.";
    confirm_password_register_input.style.border = "3px solid green";
    confirm_password_register_label.style.color = "green";
}

function valid_email() {
    email_register_message.style.color = "green";
    email_register_message.innerHTML = "Email is valid.";
    email_register_input.style.border = "3px solid green";
    email_register_label.style.color = "green";
}

function valid_friend() {
    who_is_your_best_friend_message.style.color = "green";
    who_is_your_best_friend_message.innerHTML = "Friend is valid.";
    who_is_your_best_friend_input.style.border = "3px solid green";
    who_is_your_best_friend_label.style.color = "green";
}


function reset_valid() {
    username_register_message.innerHTML = null;
    username_register_label.style.color = "black";
    username_register_input.style.border = "3px solid black";

    password_register_message.innerHTML = null;
    password_register_label.style.color = "black";
    password_register_input.style.border = "3px solid black";

    confirm_password_register_message.innerHTML = null;
    confirm_password_register_label.style.color = "black";
    confirm_password_register_input.style.border = "3px solid black";

    email_register_message.innerHTML = null;
    email_register_label.style.color = "black";
    email_register_input.style.border = "3px solid black";

    who_is_your_best_friend_message.innerHTML = null;
    who_is_your_best_friend_label.style.color = "black";
    who_is_your_best_friend_input.style.border = "3px solid black";
}

function valid() {

    if ((username_register_input.value.length >= 3 && username_register_input.value.length <= 20)) {
        valid_username();
    } else {
        username_register_message.style.color = "red";
        username_register_message.innerHTML = "Username is invalid.";
        username_register_input.style.border = "3px solid red";
        username_register_label.style.color = "red";
    }

    if (password_register_input.value.length >= 3 && password_register_input.value.length <= 20) {
        valid_password();
    } else {
        password_register_message.style.color = "red";
        password_register_message.innerHTML = "Password is invalid.";
        password_register_input.style.border = "3px solid red";
        password_register_label.style.color = "red";
    }

    if (password_register_input !== "") {
        if (confirm_password_register_input.value === password_register_input.value
            && confirm_password_register_input.value.length >= 3
            && confirm_password_register_input.value.length <= 20) {
            valid_confirm_password();
        } else {
            confirm_password_register_message.style.color = "red";
            confirm_password_register_message.innerHTML = "Passwords do not match.";
            confirm_password_register_input.style.border = "3px solid red";
            confirm_password_register_label.style.color = "red";
        }
    }

    if (email_register_input.value.includes("@")
        && email_register_input.value.includes(".")) {
        valid_email();
    } else {
        email_register_message.style.color = "red";
        email_register_message.innerHTML = "Email is invalid.";
        email_register_input.style.border = "3px solid red";
        email_register_label.style.color = "red";
    }
    if (who_is_your_best_friend_input.value !== "") {
        valid_friend();
    } else {
        who_is_your_best_friend_message.style.color = "red";
        who_is_your_best_friend_message.innerHTML = "Friend is invalid.";
        who_is_your_best_friend_input.style.border = "3px solid red";
        who_is_your_best_friend_label.style.color = "red";
    }
}


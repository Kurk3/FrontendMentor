const edit_password_email_label = document.getElementById('edit-password-email-label');
const edit_password_email_input = document.getElementById('edit-password-email-input');
const edit_password_email_message = document.getElementById('edit-password-email-message');

const edit_password_new_password_label = document.getElementById('edit-password-new-password-label');
const edit_password_new_password_input = document.getElementById('edit-password-new-password-input');
const edit_password_new_password_message = document.getElementById('edit-password-new-password-message');

const edit_password_confirm_label = document.getElementById('edit-password-password-confirm-label');
const edit_password_confirm_input = document.getElementById('edit-password-password-confirm-input');
const edit_password_confirm_message = document.getElementById('edit-password-password-confirm-message');

const edit_password_friends_name_label = document.getElementById('edit-password-friends-name-label');
const edit_password_friends_name_input = document.getElementById('edit-password-friends-name-input');
const edit_password_friends_name_message = document.getElementById('edit-password-friends-name-message');

const edit_password_form = document.getElementById('edit-password-form');

edit_password_form.addEventListener('submit', (e) => {

    let messages = [];
    e.preventDefault();

    if (edit_password_email_input.value === "") {

        validation();

        edit_password_email_input.style.border = "3px solid red";
        edit_password_email_label.style.color = "red";
        edit_password_email_message.innerHTML = "you didnt enter your email";

        console.log(messages.push("you didn't enter your email"));
    } else if (edit_password_email_input.value.indexOf("@") === -1) {

        validation();

        edit_password_email_input.style.border = "3px solid red";
        edit_password_email_label.style.color = "red";
        edit_password_email_message.innerHTML = "Email must contain @";

        console.log(messages.push("email dont contain @ "));
    } else if (edit_password_email_input.value.indexOf(".") === -1) {

        validation();

        edit_password_email_input.style.border = "3px solid red";
        edit_password_email_label.style.color = "red";
        edit_password_email_message.innerHTML = "Email must contain .";


        console.log(messages.push("email must contain ."));
    } else if (edit_password_new_password_input.value === "") {

        validation();

        edit_password_new_password_input.style.border = "3px solid red";
        edit_password_new_password_label.style.color = "red";
        edit_password_new_password_message.innerHTML = "you didnt enter your new password";


        console.log(messages.push("you didnt enter your new password"));
    } else if (edit_password_new_password_input.value.length <= 6) {

        validation();
        edit_password_new_password_input.style.border = "3px solid red";
        edit_password_new_password_label.style.color = "red";
        edit_password_new_password_message.innerHTML = "your password must be 6 characters long";


        console.log(messages.push("your password must be at least 6 characters long"));
    } else if (edit_password_new_password_input.value.length > 20) {

        validation();

        edit_password_new_password_input.style.border = "3px solid red";
        edit_password_new_password_label.style.color = "red";
        edit_password_new_password_message.innerHTML = "your password must be less than 20 characters long";

        console.log(messages.push("your password must be less than 20 characters long"));
    } else if (edit_password_confirm_input.value === "") {

        validation();

        edit_password_confirm_input.style.border = "3px solid red";
        edit_password_confirm_label.style.color = "red";
        edit_password_confirm_message.innerHTML = "you didn't enter your password confirm";

        console.log(messages.push("you didnt enter your password confirm"));

    } else if (edit_password_confirm_input.value !== edit_password_new_password_input.value) {

        validation();

        edit_password_confirm_input.style.border = "3px solid red";
        edit_password_confirm_label.style.color = "red";
        edit_password_confirm_message.innerHTML = "your password confirm must be the same as your new password.";

        console.log(messages.push("your password confirm must be the same as your new password"));
    } else if (edit_password_friends_name_input.value === "") {
        validation();

        edit_password_friends_name_input.style.border = "3px solid red";
        edit_password_friends_name_label.style.color = "red";
        edit_password_friends_name_message.innerHTML = "You don't enter your friends name";

        console.log(messages.push("you didnt enter your friends name"));
    } else {
        console.log(messages.push("your password has been changed"));
        edit_password_form.submit();
        alert("Your password has been changed");

        window.location.href = '/homepage_after';

    }
});

function valid_email() {
    edit_password_email_label.style.color = "green";
    edit_password_email_input.style.border = "3px solid green";
    edit_password_email_message.style.color = "green";
    edit_password_email_message.innerHTML = "Email is valid.";
}

function valid_new_password() {
    edit_password_new_password_label.style.color = "green";
    edit_password_new_password_input.style.border = "3px solid green";
    edit_password_new_password_message.style.color = "green";
    edit_password_new_password_message.innerHTML = "Username is valid.";
}

function confirm_password_valid() {
    edit_password_confirm_label.style.color = "green";
    edit_password_confirm_input.style.border = "3px solid green";
    edit_password_confirm_message.innerHTML = "Password is valid.";
    edit_password_confirm_message.style.color = "green";
}

function your_friend_name_valid() {
    edit_password_friends_name_label.style.color = "green";
    edit_password_friends_name_input.style.border = "3px solid green";
    edit_password_friends_name_message.innerHTML = "Name is valid.";
    edit_password_friends_name_message.style.color = "green";
}

function reset_password_validation() {
    edit_password_email_label.style.color = "black";
    edit_password_email_input.style.border = "3px solid black";
    edit_password_email_message.style.color = "black";
    edit_password_email_message.innerHTML = "";

    edit_password_new_password_label.style.color = "black";
    edit_password_new_password_input.style.border = "3px solid black";
    edit_password_new_password_message.style.color = "black";
    edit_password_new_password_message.innerHTML = "";

    edit_password_confirm_label.style.color = "black";
    edit_password_confirm_input.style.border = "3px solid black";
    edit_password_confirm_message.style.color = "black";
    edit_password_confirm_message.innerHTML = "";

    edit_password_friends_name_label.style.color = "black";
    edit_password_friends_name_input.style.border = "3px solid black";
    edit_password_friends_name_message.style.color = "black";
    edit_password_friends_name_message.innerHTML = "";
}

function validation() {
    // ked email obsahuje @ a bodku tak je validny
    // ked heslo obsahuje viac ako 6 znakov tak je validny
    // ked heslo a potvrdenie hesla sa rovnaju tak je validny
    // ked friend obsahuje viac ako 1 znak tak je validny

    if (edit_password_email_input.value.includes("@")
        && edit_password_email_input.value.includes(".")) {
        valid_email();
    } else {
        edit_password_email_label.style.color = "red";
        edit_password_email_input.style.border = "3px solid red";
        edit_password_email_message.style.color = "red";
        edit_password_email_message.innerHTML = "Email is not valid.";
    }

    if (edit_password_new_password_input.value.length >= 4) {
        valid_new_password();
    } else {
        edit_password_new_password_label.style.color = "red";
        edit_password_new_password_input.style.border = "3px solid red";
        edit_password_new_password_message.style.color = "red";
        edit_password_new_password_message.innerHTML = "Password is not valid.";
    }

    if (edit_password_confirm_input.value ===
        edit_password_new_password_input.value &&
        edit_password_confirm_input.value.length > 6) {
        confirm_password_valid();
    } else {
        edit_password_confirm_label.style.color = "red";
        edit_password_confirm_input.style.border = "3px solid red";
        edit_password_confirm_message.style.color = "red";
        edit_password_confirm_message.innerHTML = "Password is not valid.";
    }

    if (edit_password_friends_name_input.value.length > 1) {
        your_friend_name_valid();
    } else {
        edit_password_friends_name_label.style.color = "red";
        edit_password_friends_name_input.style.border = "3px solid red";
        edit_password_friends_name_message.style.color = "red";
        edit_password_friends_name_message.innerHTML = "Friend is not valid.";
    }

}




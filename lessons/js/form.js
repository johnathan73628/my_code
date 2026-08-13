
// Get the form
const form = document.getElementById("registrationFORM");

// Get the input fields
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const age = document.getElementById("age");


// Prevent form submission and validate
form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Validate Name
    if (name.value.trim() === "") {
        alert("Name is required.");
        return;
    }


    // Validate Email
    if (email.value.trim() === "") {
        alert("Email is required.");
        return;
    }

    else if (!email.value.includes("@")) {
        alert("Email must contain '@'.");
        return;
    }


    // Validate Password
    if (password.value === "") {
        alert("Password is required.");
        return;
    }

    if (password.value.length < 8) {
        alert("Password must contain at least 8 characters.");
        return;
    }


    // Validate Confirm Password
    if (confirmPassword.value === "") {
        alert("Please confirm your password.");
        return;
    }

    else if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
    }


    // Validate Phone Number
    if (phone.value.trim() === "") {
        alert("Phone number is required.");
        return;
    }


    // Validate Age
    if (age.value.trim() === "") {
        alert("Age is required.");
        return;
    }


    // If everything is valid
    alert("Registration successful!");

});
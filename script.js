let form = document.getElementById("login_form");
let usernameValidation = document.getElementById("validation_username");
let passwordValidation = document.getElementById("validation_password");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let validationOk = true;

    if (username.length < 6) {
        usernameValidation.classList.remove("hidden");
        validationOk = false;
    } else {
        usernameValidation.classList.add("hidden");
    }

    if (password.length < 8) {
        passwordValidation.classList.remove("hidden");
        validationOk = false;
    } else {
        passwordValidation.classList.add("hidden");
    }

    if (validationOk) {
        Swal.fire({
            title: "Sesión iniciada!",
            text: "Bienvenido " + username + "!",
            icon: "success"
        });
    }
});
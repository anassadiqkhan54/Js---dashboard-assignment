let email = document.getElementById("email");

let password = document.getElementById("password");

let erroremail = document.getElementById("erroremail");

let errorpassword = document.getElementById("errorpassword");

let loginError = document.getElementById("loginError");

let loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", LoginFunc);


function LoginFunc(e) {

    e.preventDefault();


    let isValid = true;


    if (email.value.trim() == "") {

        erroremail.innerText = "Please fill email";

        isValid = false;

    } else {

        erroremail.innerText = "";

    }


    if (password.value == "") {

        errorpassword.innerText = "Please fill password";

        isValid = false;

    } else {

        errorpassword.innerText = "";

    }


    if (!isValid) {
        return;
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];


    let user = users.find(function (user) {

        return user.email.toLowerCase() ===
            email.value.trim().toLowerCase();

    });


    if (!user) {

        loginError.innerText =
            "Email or password is incorrect";

        return;
    }


    if (user.password !== password.value) {

        loginError.innerText =
            "Email or password is incorrect";

        return;
    }


    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );


    window.location.href = "dashboard.html";

}


email.addEventListener("input", function () {

    if (email.value.trim() != "") {

        erroremail.innerText = "";

        loginError.innerText = "";

    }

});


password.addEventListener("input", function () {

    if (password.value != "") {

        errorpassword.innerText = "";

        loginError.innerText = "";

    }

});
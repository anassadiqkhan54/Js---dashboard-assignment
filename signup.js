let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");
let country = document.getElementById("country");
let dob = document.getElementById("dob");

let errorname = document.getElementById("errorname");
let erroremail = document.getElementById("erroremail");
let errorpassword = document.getElementById("errorpassword");
let errorage = document.getElementById("errorage");
let errorcountry = document.getElementById("errorcountry");
let errordob = document.getElementById("errordob");

let signupForm = document.getElementById("signupForm");


signupForm.addEventListener("submit", SignUpFunc);


function SignUpFunc(e) {

    e.preventDefault();


    let isValid = true;


    if (userName.value.trim() == "") {

        errorname.innerText = "Please fill username";

        isValid = false;

    } else {

        errorname.innerText = "";
    }


    if (email.value.trim() == "") {

        erroremail.innerText = "Please fill email";

        isValid = false;

    } else if (!email.value.includes("@")) {

        erroremail.innerText = "Please enter a valid email";

        isValid = false;

    } else {

        erroremail.innerText = "";
    }


    if (password.value == "") {

        errorpassword.innerText = "Please fill password";

        isValid = false;

    } else if (password.value.length < 8) {

        errorpassword.innerText =
            "Password must be at least 8 characters";

        isValid = false;

    } else {

        errorpassword.innerText = "";
    }


    if (age.value == "") {

        errorage.innerText = "Please fill age";

        isValid = false;

    } else if (age.value < 1 || age.value > 100) {

        errorage.innerText = "Please enter a valid age";

        isValid = false;

    } else {

        errorage.innerText = "";
    }



    if (country.value == "") {

        errorcountry.innerText = "Please select country";

        isValid = false;

    } else {

        errorcountry.innerText = "";
    }



    if (dob.value == "") {

        errordob.innerText = "Please select date of birth";

        isValid = false;

    } else {

        errordob.innerText = "";
    }


    if (!isValid) {
        return;
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];


    let emailExists = users.some(function (user) {

        return user.email.toLowerCase() === email.value.trim().toLowerCase();

    });


    if (emailExists) {

        erroremail.innerText = "Email already registered";

        return;
    }


    let userObj = {

        userName: userName.value.trim(),

        email: email.value.trim(),

        password: password.value,

        age: age.value,

        country: country.value,

        dob: dob.value

    };


    users.push(userObj);

    localStorage.setItem("users", JSON.stringify(users));


    alert("Signup successful! Please login.");


    window.location.href = "login.html";

}


userName.addEventListener("input", function () {

    if (userName.value.trim() != "") {

        errorname.innerText = "";

    }

});


email.addEventListener("input", function () {

    if (email.value.trim() != "") {

        erroremail.innerText = "";

    }

});


password.addEventListener("input", function () {

    if (password.value == "") {

        errorpassword.innerText = "Please fill password";

    } else if (password.value.length < 8) {

        errorpassword.innerText =
            "Password must be at least 8 characters";

    } else {

        errorpassword.innerText = "";

    }

});


age.addEventListener("input", function () {

    if (age.value != "") {

        errorage.innerText = "";

    }

});


country.addEventListener("change", function () {

    if (country.value != "") {

        errorcountry.innerText = "";

    }

});


dob.addEventListener("change", function () {

    if (dob.value != "") {

        errordob.innerText = "";

    }

});
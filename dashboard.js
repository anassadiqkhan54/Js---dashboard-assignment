let welcomeName = document.getElementById("welcomeName");

let showName = document.getElementById("showName");
let showEmail = document.getElementById("showEmail");
let showPassword = document.getElementById("showPassword");
let showAge = document.getElementById("showAge");
let showCountry = document.getElementById("showCountry");
let showDob = document.getElementById("showDob");

let cardCountry = document.getElementById("cardCountry");
let cardAge = document.getElementById("cardAge");

let logoutBtn = document.getElementById("logoutBtn");



let dashboardBtn = document.getElementById("dashboardBtn");
let profileBtn = document.getElementById("profileBtn");
let settingsBtn = document.getElementById("settingsBtn");



let dashboardSection =
    document.getElementById("dashboardSection");

let profileSection =
    document.getElementById("profileSection");

let settingsSection =
    document.getElementById("settingsSection");



let profileName =
    document.getElementById("profileName");

let profileEmail =
    document.getElementById("profileEmail");

let profileAge =
    document.getElementById("profileAge");

let profileCountry =
    document.getElementById("profileCountry");

let profileDob =
    document.getElementById("profileDob");



let settingsEmail =
    document.getElementById("settingsEmail");

let changePasswordBtn =
    document.getElementById("changePasswordBtn");

let passwordBox =
    document.getElementById("passwordBox");

let newPassword =
    document.getElementById("newPassword");

let passwordError =
    document.getElementById("passwordError");

let savePasswordBtn =
    document.getElementById("savePasswordBtn");



let loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));



if (!loggedInUser) {

    window.location.href = "login.html";

} else {



    welcomeName.innerText =
        loggedInUser.userName;


    showName.innerText =
        loggedInUser.userName;


    showEmail.innerText =
        loggedInUser.email;


    showPassword.innerText =
        loggedInUser.password;


    showAge.innerText =
        loggedInUser.age;


    showCountry.innerText =
        loggedInUser.country;


    showDob.innerText =
        loggedInUser.dob;


    cardAge.innerText =
        loggedInUser.age;


    cardCountry.innerText =
        loggedInUser.country;



    profileName.innerText =
        loggedInUser.userName;


    profileEmail.innerText =
        loggedInUser.email;


    profileAge.innerText =
        loggedInUser.age;


    profileCountry.innerText =
        loggedInUser.country;


    profileDob.innerText =
        loggedInUser.dob;



    settingsEmail.innerText =
        loggedInUser.email;

}



function showSection(sectionName) {



    dashboardSection.style.display = "none";

    profileSection.style.display = "none";

    settingsSection.style.display = "none";



    dashboardBtn.classList.remove("active");

    profileBtn.classList.remove("active");

    settingsBtn.classList.remove("active");



    if (sectionName == "dashboard") {

        dashboardSection.style.display = "block";

        dashboardBtn.classList.add("active");

    }



    if (sectionName == "profile") {

        profileSection.style.display = "block";

        profileBtn.classList.add("active");

    }



    if (sectionName == "settings") {

        settingsSection.style.display = "block";

        settingsBtn.classList.add("active");

    }

}



dashboardBtn.addEventListener("click", function (e) {

    e.preventDefault();

    showSection("dashboard");

});



profileBtn.addEventListener("click", function (e) {

    e.preventDefault();

    showSection("profile");

});



settingsBtn.addEventListener("click", function (e) {

    e.preventDefault();

    showSection("settings");

});



changePasswordBtn.addEventListener("click", function () {

    if (passwordBox.style.display == "block") {

        passwordBox.style.display = "none";

    } else {

        passwordBox.style.display = "block";

        newPassword.focus();

    }

});



savePasswordBtn.addEventListener("click", function () {


    if (newPassword.value == "") {

        passwordError.innerText =
            "Please enter new password";

        return;

    }


    if (newPassword.value.length < 8) {

        passwordError.innerText =
            "Password must be at least 8 characters";

        return;

    }


    passwordError.innerText = "";



    let users =
        JSON.parse(localStorage.getItem("users")) || [];



    let userIndex = users.findIndex(function (user) {

        return user.email.toLowerCase() ===
            loggedInUser.email.toLowerCase();

    });


    if (userIndex == -1) {

        passwordError.innerText =
            "User not found";

        return;

    }



    users[userIndex].password =
        newPassword.value;



    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );



    loggedInUser.password =
        newPassword.value;


    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(loggedInUser)
    );



    showPassword.innerText =
        loggedInUser.password;



    newPassword.value = "";


    passwordBox.style.display = "none";


    alert("Password changed successfully!");

});



newPassword.addEventListener("input", function () {

    if (newPassword.value.length >= 8) {

        passwordError.innerText = "";

    }

});



logoutBtn.addEventListener("click", function () {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

});
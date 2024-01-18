"use strict";

const apiBaseURL = "microbloglite.us-east-2.elasticbeanstalk.com";
const loginButton = document.getElementById("loginButton")
const usernameField = document.getElementById("usernameField");
const passwordField = document.getElementById("passwordField");

window.onload = init;

function init(){
    loginButton.onclick = loginClick;
}

function loginClick(){
    const loginData = {
        username: usernameField.value,
        password: passwordField.value,
    };

    login(loginData);

}



function getLoginData() {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}


// You can use this function to see whether the current visitor is
// logged in. It returns either `true` or `false`.
function isLoggedIn() {
    const loginData = getLoginData();
    return Boolean(loginData.token);
}


// This function is already being used in the starter code for the
// landing page, in order to process a user's login. READ this code,
// and feel free to re-use parts of it for other `fetch()` requests
// you may need to write.
function login(loginData) {
    // POST /auth/login
    const options = {
        method: "POST",
        headers: {
            // This header specifies the type of content we're sending.
            // This is required for endpoints expecting us to send
            // JSON data.
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        
    };

    return fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/auth/login", options).then(response => response.json()).then(loginData => {
            window.localStorage.setItem("login-data", JSON.stringify(loginData));
            window.location.assign("products.html");  // redirect

            return loginData;
        });
}
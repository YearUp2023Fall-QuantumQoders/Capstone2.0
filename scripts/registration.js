"use strict";

const fullNameValue = document.getElementById("inputFullName").value;
const usernameValue = document.getElementById("inputUsername").value;
const passwordValue = document.getElementById("inputPassword").value;
const registrationButton = document.getElementById("addUserBtn");

window.onload = init;

function init(){
    registrationButton.onclick = registerUser;
}

function registerUser(){
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users", {
        method: "POST",
        body: JSON.stringify({
          fullName: fullNameValue,
          password: passwordValue,
          username: usernameValue,
          about: "None",
          }),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      })
      .then(response => response.json())
      
      .then(json =>{
        console.log(json);
        // Handle the response data as needed
        window.location.replace('/login.html');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle the error appropriately
      });
    }

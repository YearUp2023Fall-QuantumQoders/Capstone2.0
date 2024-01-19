"use strict"

const weeklyPicksDropdown =document.getElementById('weeklyPicksDropdown');


window.onload=init;


function init(){
initWeeklyDropdown();
 weeklyPicksDropdown.onchange= onWeeklyPickDropdownChanged;
}


function initWeeklyDropdown (){
    
    for (let pick of weeklyPicks) {
    let TheOption = new Option(pick.name);
  
    weeklyPicksDropdown.appendChild(TheOption);
  }
}

function onWeeklyPickDropdownChanged(){

}







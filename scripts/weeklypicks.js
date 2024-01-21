"use strict"

const weeklyPicksDropdown =document.getElementById('weeklyPicksDropdown');
const displayPicksDiv= document.getElementById('displayPick')


window.onload=init;


function init(){
initWeeklyDropdown();
 weeklyPicksDropdown.onchange= onWeeklyPickDropdownChanged;
}


function initWeeklyDropdown (){
    
    for (let pick of weeklyPicks) {
    let TheOption = new Option(pick.name,pick.name);
  
    weeklyPicksDropdown.appendChild(TheOption);
    
  }
}

function onWeeklyPickDropdownChanged() {
    let selectedValue = weeklyPicksDropdown.value;
    
    for (let pick of weeklyPicks) {
        if (selectedValue === pick.name) {
            let desc = pick.description;
            
          
            let descParagraph = document.createElement('p');
            descParagraph.textContent = desc;
        
            let pickImg = new Image();
            pickImg.src = `images/${pick.img}`;
            
           
            displayPicksDiv.innerHTML = '';
            
           
            displayPicksDiv.appendChild(pickImg);
            displayPicksDiv.appendChild(descParagraph);
        }
    }
}






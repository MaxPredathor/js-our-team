"use strict";

const ourTeam = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        position: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    
    {
        name: "Scott Estrada",
        position: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    },
];
console.log(ourTeam);
const row = document.querySelector(".row");

for(const val in ourTeam){
    printCol(ourTeam[val]);
}

function printCol(ourTeam){
    const col = document.createElement("div");
    col.classList.add("col-4");
    const schema = 
    `
    <div class="card text-start">
        <img class="card-img-top" src="img/${ourTeam.picture}">
        <div class="card-body">
            <h3 class="card-title">${ourTeam.name}</h3>
            <p class="card-text">${ourTeam.position}</p>
        </div>
    </div>  
    `;
    col.innerHTML = schema;
    row.append(col);
}

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    const newMember =  {
      name: document.getElementById('name').value,
      position: document.getElementById('position').value,
      picture: document.getElementById('picture').value,
    }

    ourTeam.push(newMember);
    printCol(newMember);
});


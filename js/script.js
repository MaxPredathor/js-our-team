"use strict";

(function(){

    const row = document.querySelector(".row");
    const ourTeam = [
        {
            name: 'Wayne Barnett',
            position: 'Founder & CEO',
            picture: 'wayne-barnett-founder-ceo.jpg'
        },

        {
            name: 'Angela Caroll',
            position: 'Chief Editor',
            picture: 'angela-caroll-chief-editor.jpg'
        },

        {
            name: 'Walter Gordon',
            position: 'Office Manager',
            picture: 'walter-gordon-office-manager.jpg'
        },

        {
            name: 'Angela Lopez',
            position: 'Social Media Manager',
            picture: 'angela-lopez-social-media-manager.jpg'
        },

        {
            name: 'Scott Estrada',
            position: 'Developer',
            picture: 'scott-estrada-developer.jpg'
        },

        {
            name: 'Barbara Ramos',
            position: 'Graphic Designer',
            picture: 'barbara-ramos-graphic-designer.jpg'
        },
    ];
    console.log(ourTeam);

    for(let i of ourTeam){
        printCol(ourTeam[i]);
    }

    function printCol(ourTeam){
        const col = document.createElement("div");
        col.classList.add("col-4");
        const schema = 
        `
        <div class="card text-start">
          <img class="card-img-top" src="../img/${ourTeam.picture}" alt="Card">
          <div class="card-body">
            <h3 class="card-title">${ourTeam.name}</h3>
            <p class="card-text">${ourTeam.position}</p>
            </div>
        </div>  
        `;
        col.innerHTML = schema;
        row.append(col);
    }


}) ();


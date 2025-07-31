"use strict";

// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("concerts");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patmQnlb1PEUHsBQD.e55b917b72489421adf308f243c8dac6aef91fe1271056d9d908f69e133cc4d4`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appZkzYGqZMEohaFU/concerts-data`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let logo = data.records[i].fields["Logo"]; // here we are getting column values
        let name = data.records[i].fields[""]; //here we are using the Field ID to fecth the name property
        let neighborhood = data.records[i].fields["Neighborhood"];

        newHtml += `
        
         <<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
                
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
    
}
getAllRecords(); 
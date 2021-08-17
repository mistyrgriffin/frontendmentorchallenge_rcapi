var outerContainer = document.getElementById("outer-container");
var titleEl = document.getElementById("title-el");
var faIcon = document.getElementById("fa-icon");
var lightDarkBtn = document.getElementById("lightdark-btn");
var searchEl = document.getElementById("search-el");
var faSearchEl = document.getElementById("fasearch-el");
var searchInputEl = document.getElementById("searchinput-el");
var regionListEl = document.getElementById("regionlist-el");
var countryCardEl = document.getElementById("countrycard-el");
var filterByRegionEl = document.getElementById("filterbyregion-el");
var filterAfricaEl = document.getElementById("filterafrica-el");
var filterAmericasEl = document.getElementById("filteramericas-el");
var filterAsiaEl = document.getElementById("filterasia-el");
var filterEuropeEl = document.getElementById("filtereurope-el");
var filterOceaniaEl = document.getElementById("filteroceania-el");
var countryCardInfoEl = document.getElementById("countrycardinfo-el");


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => addCountryCards(data))
    .catch(err => console.log("Error: ", err));
});

function addCountryCards(countries) {
    for(var i = 0; i < countries.length; i++) {
        countryCardEl.innerHTML += `
        <div class="countrycardinfo">
        <img src="${countries[i].flag}" alt="Country flag image"/>
        <h1 class="countryname">${countries[i].name}</h1>
        <div class="countrypopulation"><span>Population:</span>${countries[i].population}</div>
        <div class="countryregion"><span>Region:</span>${countries[i].region}</div>
        <div class="countrycapital"><span>Capital:</span>${countries[i].capital}</div>
        </div>
        `
    };
}
addCountryCards();

function searchRegionAfrica() {
    fetch("https://restcountries.eu/rest/v2/region/africa")
    .then(res => res.json())
    .then(data => addCountryCards(data))
    .catch(err => console.log("Error: ", err));
    
    function addAfricaCountryCards(countries) {
        for(var i = 0; i < countries.length; i++) {
            countryCardEl.innerHTML += `
            <div class="countrycardinfo">
            <img src="${countries[i].flag}" alt="Country flag image"/>
            <h1 class="countryname">${countries[i].name}</h1>
            <div class="countrypopulation"><span>Population:</span>${countries[i].population}</div>
            <div class="countryregion"><span>Region:</span>${countries[i].region}</div>
            <div class="countrycapital"><span>Capital:</span>${countries[i].capital}</div>
            </div>
            `
        };
    }
    addAfricaCountryCards();
};
searchRegionAfrica();

lightDarkBtn.addEventListener("click", () => {
    if (faIcon.textContent === "Light Mode") {
        faIcon.textContent = "Dark Mode";
    } else {
        faIcon.textContent = "Light Mode";
    }
    if(outerContainer.style.background === "var(--lightmodebackground)") {
        outerContainer.style.background = "var(--darkmodebackground)";
    } else {
        outerContainer.style.background = "var(--lightmodebackground)";
    }
    if(titleEl.style.color === "var(--lightmodetext)") {
        titleEl.style.color = "var(--darkmodetext)";
    } else {
        titleEl.style.color = "var(--lightmodetext)";
    }
    if(lightDarkBtn.style.color === "var(--lightmodetext)") {
        lightDarkBtn.style.color = "var(--darkmodetext)";
    } else {
        lightDarkBtn.style.color = "var(--lightmodetext)";
    }
    if(searchEl.style.background === "var(--lightmodeelement)") {
        searchEl.style.background = "var(--darkmodeelement)";
    } else {
        searchEl.style.background = "var(--lightmodeelement)";
    }
    if(faSearchEl.style.color === "var(--lightmodetext)") {
        faSearchEl.style.color = "var(--darkmodetext)";
    } else {
        faSearchEl.style.color = "var(--lightmodetext)";
    }
    if(searchInputEl.style.background === "var(--lightmodeelement)") {
        searchInputEl.style.background = "var(--darkmodeelement)";
    } else {
        searchInputEl.style.background = "var(--lightmodeelement)";
    }
    if(searchInputEl.style.color === "var(--lightmodetext)") {
        searchInputEl.style.color = "var(--darkmodetext)";
    } else {
        searchInputEl.style.color = "var(--lightmodetext)";
    }
    if(regionListEl.style.background === "var(--lightmodeelement)") {
        regionListEl.style.background = "var(--darkmodeelement)";
    } else {
        regionListEl.style.background = "var(--lightmodeelement)";
    }
    if(regionListEl.style.color === "var(--lightmodetext)") {
        regionListEl.style.color = "var(--darkmodetext)";
    } else {
        regionListEl.style.color = "var(--lightmodetext)";
    }
    if(countryCardEl.style.color === "var(--darkmodetext)") {
        countryCardEl.style.color = "var(--lightmodetext)";
    } else {
        countryCardEl.style.color = "var(--darkmodetext)";
    }
    if(countryCardInfoEl.style.background === "var(--lightmodeelement)") {
        countryCardInfoEl.style.background = "var(--darkmodeelement)";
    } else {
        countryCardInfoEl.style.background = "var(--lightmodeelement)";
    }
    if(countryCardInfoEl.style.color === "var(--lightmodetext)") {
        countryCardInfoEl.style.color = "var(--darkmodetext)";
    } else {
        countryCardInfoEl.style.color = "var(--lightmodetext)";
    }
});



// function searchCountryName() {
//     fetch(`"https://restcountries.eu/rest/v2/name/${name}"`)
//     .then(res => res.json())
//     .then(data => addCountryCards(data))
//     .catch(err => console.log("Error: ", err));
//     addCountryCards();
// }
// // searchCountryName();

// function searchRegionAmericas() {
//     fetch("https://restcountries.eu/rest/v2/region/americas")
//     .then(res => res.json())
//     .then(data => addCountryCards(data))
//     .catch(err => console.log("Error: ", err));
//     addCountryCards();
// }
// searchRegionAmericas();

// function searchRegionAsia() {
//     fetch("https://restcountries.eu/rest/v2/region/asia")
//     .then(res => res.json())
//     .then(data => addCountryCards(data))
//     .catch(err => console.log("Error: ", err));
//     addCountryCards();
// }
// searchRegionAsia();

// function searchRegionEurope() {
//     fetch("https://restcountries.eu/rest/v2/region/europe")
//     .then(res => res.json())
//     .then(data => addCountryCards(data))
//     .catch(err => console.log("Error: ", err));
//     addCountryCards();
// }
// searchRegionEurope();

// function searchRegionOceania() {
//     fetch("https://restcountries.eu/rest/v2/region/oceania")
//     .then(res => res.json())
//     .then(data => addCountryCards(data))
//     .catch(err => console.log("Error: ", err));
//     addCountryCards();
// }
// searchRegionOceania();




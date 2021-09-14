var outerContainer = document.getElementById("outer-container");
var headerContainer = document.getElementById("header-container");
var modalHeaderContainer = document.getElementById("modalheader-container");
var titleEl = document.getElementById("title-el");
var modalTitleEl = document.getElementById("modaltitle-el");
var titleLink = document.getElementById("title-link");
var modalTitleLink = document.getElementById("modaltitle-link");
var lightDarkBtn = document.getElementById("lightdark-btn");
var modalLightDarkBtn = document.getElementById("modallightdark-btn");
var faSearchEl = document.getElementById("fasearch-el");
var searchInputEl = document.getElementById("searchinput-el");
var dropDownEl = document.getElementById("dropdown-list");
var regionListEl = document.getElementById("regionlist-el");
var filterRegion = document.querySelectorAll("li");
var countryCardInfoEl = document.getElementById("countrycardinfo-el");
var countryInfo = document.getElementsByClassName(".countryinfo");
var countryDetailsEl = document.getElementById("countrydetails-container");
var countryContainer = document.getElementById("country-container");
var modal = document.getElementById("modal");
var backButton = document.getElementById("back-btn");
var themeChange = document.querySelectorAll(".themechange");
var modalCard = document.getElementById("modal-country-container");
var allCountries = [];

themeChange.forEach(i => i.addEventListener("click", function changeTheme() {
    if (lightDarkBtn.innerHTML === " Light Mode") {
        lightDarkBtn.innerHTML = " Dark Mode";
        modalLightDarkBtn.innerHTML = " Dark Mode";
        outerContainer.style.background = "var(--darkmodebackground)";
        modal.style.background = "var(--darkmodebackground)";
        headerContainer.style.background = "var(--darkmodeelement)";
        headerContainer.style.boxshadow = "0 2px 2px var(--darkmodeshadow)";
        modalHeaderContainer.style.background = "var(--darkmodeelement)";
        modalHeaderContainer.style.boxshadow = "0 2px 2px var(--darkmodeshadow)";
        titleEl.style.color = "var(--darkmodetext)";
        titleLink.style.color = "var(--darkmodetext)";
        titleEl.style.textshadow = "0 2px 2px var(--darkmodeshadow)";
        modalTitleEl.style.color = "var(--darkmodetext)";
        modalTitleLink.style.color = "var(--darkmodetext)";
        modalTitleEl.style.textshadow = "0 2px 2px var(--darkmodeshadow)";
        lightDarkBtn.style.color = "var(--darkmodetext)";
        modalLightDarkBtn.style.color = "var(--darkmodetext)";
        backButton.style.background = "var(--darkmodeelement)";
        backButton.style.color = "var(--darkmodetext)";
        backButton.style.textshadow = "0 2px 2px var(--darkmodeshadow)";
        modalCard.style.color = "var(--darkmodetext)";
        faSearchEl.style.color = "var(--darkmodetext)";
        faSearchEl.style.background = "var(--darkmodeelement)";
        searchInputEl.style.background = "var(--darkmodeelement)";
        searchInputEl.style.color = "var(--darkmodetext)";
        dropDownEl.style.background = "var(--darkmodeelement)";
        dropDownEl.style.color = "var(--darkmodetext)";
        regionListEl.style.background = "var(--darkmodeelement)";
        regionListEl.style.color = "var(--darkmodetext)";
        countryInfo.style.background = "var(--darkmodeelement)";
        countryInfo.style.color = "var(--darkmodetext)";
        countryCardInfoEl.style.background = "var(--darkmodeelement)";
        countryDetailsEl.style.background = "var(--darkmodeelement)";
        countryDetailsEl.style.color = "var(--darkmodetext)";
    } else {
        lightDarkBtn.innerHTML = " Light Mode";
        modalLightDarkBtn.innerHTML = " Light Mode";
        outerContainer.style.background = "var(--lightmodebackground)";
        modal.style.background = "var(--lightmodeelement)";
        headerContainer.style.background = "var(--lightmodeelement)";
        headerContainer.style.boxshadow = "0 2px 2px var(--lightmodeshadow)";
        modalHeaderContainer.style.background = "var(--lightmodeelement)";
        modalHeaderContainer.style.boxshadow = "0 2px 2px var(--lightmodeshadow)";
        titleEl.style.color = "var(--lightmodetext)";
        titleLink.style.color = "var(--lightmodetext)";
        titleEl.style.textshadow = "0 2px 2px var(--lightmodeshadow)";
        modalTitleEl.style.color = "var(--lightmodetext)";
        modalTitleLink.style.color = "var(--lightmodetext)";
        modalTitleEl.style.textshadow = "0 2px 2px var(--lightmodeshadow)";
        lightDarkBtn.style.color = "var(--lightmodetext)";
        modalLightDarkBtn.style.color = "var(--lightmodetext)";
        backButton.style.background = "var(--lightmodeelement)";
        backButton.style.color = "var(--lightmodetext)";
        backButton.style.textshadow = "0 2px 2px var(--lightmodeshadow)";
        modalCard.style.color = "var(--lightmodetext)";
        faSearchEl.style.color = "var(--lightmodetext)";
        faSearchEl.style.background = "var(--lightmodeelement)";
        searchInputEl.style.background = "var(--lightmodeelement)";
        searchInputEl.style.color = "var(--lightmodetext)";
        dropDownEl.style.background = "var(--lightmodeelement)";
        dropDownEl.style.color = "var(--lightmodetext)";
        regionListEl.style.background = "var(--lightmodeelement)";
        regionListEl.style.color = "var(--lightmodetext)";
        countryInfo.style.background = "var(--lightmodeelement)";
        countryInfo.style.color = "var(--lightmodetext)";
        countryCardInfoEl.style.background = "var(--lightmodeelement)";
        countryDetailsEl.style.background = "var(--lightmodeelement)";
        countryDetailsEl.style.color = "var(--lightmodetext)";
    };
}));

searchInputEl.addEventListener("keyup", (e) => {
    var searchValue = e.target.value;
    var countryName = document.querySelectorAll(".countryname");
    
    countryName.forEach(name => {
        if(name.innerHTML.toLowerCase().includes(searchValue.toLowerCase())) {
            name.parentElement.parentElement.parentElement.style.display = "block";
        } else {
            name.parentElement.parentElement.parentElement.style.display = "none";
        }
    });
});

dropDownEl.addEventListener("click", () => {
    if(regionListEl.style.display === "none") {
        regionListEl.style.display = "block";
    } else {
        regionListEl.style.display = "none";
    }
});

filterRegion.forEach(filter => {
    if(regionListEl.style.display === "none") {
        regionListEl.style.display = "block";
    } else {
        regionListEl.style.display = "none";
    }

    filter.addEventListener("click", () => {
        var value = filter.innerHTML;
        var countryRegion = document.querySelectorAll(".countryregion");

        countryRegion.forEach(region => {
            if(region.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                region.parentElement.parentElement.parentElement.style.display = "block";
            } else {
                region.parentElement.parentElement.parentElement.style.display = "none";
            }
        });
    })
});

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => allCountries = data)
.then(() => addCountryCards(allCountries))
.catch(err => console.log("Error: ", err))

function addCountryCards(allCountries) {
    countryContainer.innerHTML = "";

    allCountries.forEach(country => {
        var countryCardEl = document.createElement("div");
        countryCardEl.classList.add("countrycardcontainer");

        countryCardEl.innerHTML = `
        <div id="countrycardinfo-el" class="countrycardinfo">
            <div id="image-container" class="imagecontainer">
                <img class="countryflag" src="${country.flag}" alt="country flag image">
            </div>
            <div id="countrydetails-container" class="countrycarddetailscontainer">
                <h2 class="countryinfo countryname">${country.name}</h2>
                <p class="countryinfo countrydetails countrypopulation"><strong>Population:  </strong>${country.population}</p>
                <p class="countryinfo countrydetails countryregion"><strong>Region:  </strong>${country.region}</p>
                <p class="countryinfo countrydetails countrycapital"><strong>Capital:  </strong>${country.capital}</p>
            </div>
        </div>
        `;

        countryCardEl.addEventListener("click", () => {
            modal.style.display = "block";
            countryContainer.style.display = "none";
            modalCountryDetails(country);
        });

        countryContainer.appendChild(countryCardEl);
    });
};

function modalCountryDetails(country) {
    modalCard.innerHTML = `
        <div id="modalcountrycard-el" class="modalcountrycardcontainer">
            <div id="modalimage-container">
                <img class="modalcountryflag" src="${country.flag}" alt="country flag image">
            </div>
            <div id="modalcountrydetails-container" class="modalcountrydetailscontainer">
                <h2 class="countryinfo countryname">${country.name}</h2>
                <div class="modaldetails">
                    <div class="modaldetail-1">
                        <p class="countryinfo countrydetails countrynativename"><strong>Native Name:  </strong>${country.nativeName}</p>
                        <p class="countryinfo countrydetails countrypopulation"><strong>Population:  </strong>${country.population}</p>
                        <p class="countryinfo countrydetails countryregion"><strong>Region:  </strong>${country.region}</p>
                        <p class="countryinfo countrydetails countrysubregion"><strong>Sub Region:  </strong>${country.subregion}</p>
                        <p class="countryinfo countrydetails countrycapital"><strong>Capital:  </strong>${country.capital}</p>
                    </div>
                    <div class="modaldetail-2">
                        <p class="countryinfo countrydetails countrytopleveldomain"><strong>Top Level Domain:  </strong>${country.topLevelDomain}</p>
                        <p class="countryinfo countrydetails countrycurrencies"><strong>Currencies:  </strong>${country.currencies[0].name}</p>
                        <p class="countryinfo countrydetails countrylanguages"><strong>Languages:  </strong>${country.languages[0].name}</p>
                    </div>
                </div>
                <div class="borders">
                    <h3 class="bordercountries">Border Countries:</h3>
                    ${country.borders}
                </div>
            </div>
        </div>
    `;
};

backButton.addEventListener("click", () => {
    modal.style.display = "none";
    countryContainer.style.display = "grid";
});





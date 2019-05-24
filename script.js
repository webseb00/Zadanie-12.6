var url = 'https://restcountries.eu/rest/v2/name/',
    countriesList = document.querySelector('#countries'),
    countriesWrapper = document.querySelector('.countries-wrapper'),
    state = document.querySelector('.state'),
    capital = document.querySelector('.capital'),
    population = document.querySelector('.population'),
    area = document.querySelector('.area'),
    currency = document.querySelector('.currency'),
    flagImg = document.querySelector('.country-flag'),
    region = document.querySelector('.region'),
    headingState = document.querySelector('#heading-state');

document.querySelector('#search').addEventListener('click', searchCountries);

function searchCountries() {

    countriesWrapper.style.display = 'block';

    var countryName = document.querySelector('#country-name').value;

    if(!countryName.length) {
        countryName = 'Poland';
    }

    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    resp.forEach(function(item) {
        headingState.innerText = item.name;
        flagImg.src = item.flag;
        state.innerText = item.name;
        capital.innerText = item.capital;
        population.innerText = item.population;
        area.innerText = item.area;
        currency.innerText = item.currencies[0]['code'];
        region.innerText = item.region;
    });
}
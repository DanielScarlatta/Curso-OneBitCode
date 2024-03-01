const main = document.getElementById("countries");

function createCountryCard(contry) {
  const countryCard = document.createElement("div");
  countryCard.classList.add("country");

  const nameCountry = document.createElement("h2");
  nameCountry.innerText = contry.name.common;

  const imgCountry = document.createElement("img");
  imgCountry.src = contry.coatOfArms.png;

  countryCard.append(nameCountry, imgCountry);
  main.appendChild(countryCard);
}

async function getContries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  console.log(data);

  data.forEach(createCountryCard);
}

getContries();

const getData = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayCountries(data);
    });
};
const displayCountries = (data) => {
  // console.log(data);
  const countries_container = document.getElementById('countries_container');
  data.slice(0, 9).forEach((country) => {
    // const { flags, capital, name, population, languages, independent, maps } =
    //   country;

    countries_container.innerHTML += countriesHTML(country);
    // console.log(country);
  });
};

const countriesHTML = ({
  flags,
  capital,
  name,
  population,
  languages,
  independent,
  maps,
}) => {
  return `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="${flags.png}" alt="${flags.alt}" /></figure>
    <div class="card-body">
        <h2 class="card-title">
            ${name.common} 
        </h2>
        <div>
     
        <ul>
        <li>capital: ${capital[0]}</li>
        <li>independent: ${independent}</li>
        <li>population: ${population}</li>
        <li>languages: ${Object.values(languages)[0]}</li>
        </ul>
        </div>
        <button class="btn btn-primary"><a href="${
          maps.googleMaps
        }">google map</a></button>
        
    </div>
</div>
    `;
};

getData();

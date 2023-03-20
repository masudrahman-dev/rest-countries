const getData = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      //   spinner(true);
      displayCountries(data);
      //   spinner(false);
    })
    .catch((error) => {
      console.log('Error fetching data:', error);
    });
};

const displayCountries = (data) => {
  const countries_container = document.getElementById('countries_container');
  if (!countries_container) {
    console.log('Container element not found');
    return;
  }

  data.forEach((country) => {
    countries_container.innerHTML += countriesHTML(country);
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
           <li>capital: ${capital[0] ? capital[0] : 'not capital'}</li>
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

function spinner(isSpinner) {
  if (isSpinner) {
    // console.log(isSpinner);
    document.getElementById('spinner').classList.remove('hidden');
  } else {
    document.getElementById('spinner').classList.add('hidden');
  }
}

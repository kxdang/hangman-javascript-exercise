const getPuzzle = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then(data => {
      return data.puzzle;
    });
};

const getCountry = countryCode => {
  return fetch(`http://restcountries.eu/rest/v2/all`)
    .then(response => {
      if (response.status === 200) {
        //ready state does not exist in fetch api
        return response.json();
      } else {
        throw new Error("Unable to fetch countries");
      }
    })
    .then(data => data.find(country => country.alpha2Code === countryCode));
};

const getLocat = () => {
  return fetch(`http://ipinfo.io/json?token=`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch your API data");
      }
    })
    .then(data => {
      return data;
    });
};

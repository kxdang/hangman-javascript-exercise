const getPuzzle = async wordCount => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
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
  const secretToken = config.MY_INFO_KEY;
  return fetch(`http://ipinfo.io/json?token=${secretToken}`)
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

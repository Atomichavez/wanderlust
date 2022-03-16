const optionz = {method: 'GET', headers: {Accept: 'application/json'}};
fetch('https://api.foursquare.com/v3/places/4f74d687e4b0c1f446e6b413/photos', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
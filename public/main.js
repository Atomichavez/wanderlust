const foursquareKey = 'fsq39kqaQhU/X5MGGFQTTrDKVGe7TK2napXTMdB+v0+GyUw=';
const url = 'https://api.foursquare.com/v3/places/';

const openWeatherKey = '457307149d2967bed8280b5b1cbd49a5';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

const input = document.getElementById('city');
const submit = document.getElementById('button')
const $destination = $('#destination');
const $container = $('.container');
const $placeDivs = [$("#place1"), $("#place2"), $("#place3"), $("#place4"), $("#place5")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'fsq39kqaQhU/X5MGGFQTTrDKVGe7TK2napXTMdB+v0+GyUw='
  }
};

const getPlaces = async () => {
  const city = input.value
  const urlToFetch = `${url}search?near=${city}`
  try{
     const response = await fetch(urlToFetch, options)
     if(response.ok) {
       const jsonResponse = await response.json()
       const places = jsonResponse.results
       console.log(places)
       return places
     } throw new Error('Sorry')
  } catch(err) {
    console.log(err)
  }
};

const getPhotoIds = () => {
    const placeDivs = document.querySelectorAll(`section#places > div`)
    const placesIds = Object.values(placeDivs).map(place => place.getAttribute(`id`))
    
    return placesIds
}

const getPhoto = async (photoId) => {
  try {
    const photo = await fetch()

    return photo.fcq_id
  } catch (error) {
    console.error(`error in getPhoto()`)
  }
}

const getForecast = async () => {
  const city = input.value
  const urlToFetch = `${weatherUrl}?q=${city}&appid=${openWeatherKey}`
  try{
    const response = await fetch(urlToFetch)
    if(response.ok) {
      const jsonResponse = await response.json()
      return jsonResponse
    }
  }
  catch(err){console.log(err)}
};


// Render functions
const renderPlaces = async (places) => {
  try {
    // $placeDivs.forEach(($place, index) => {
    //   // Add your code here:
    //   const place = places[index]
    //   const placeImgId = place.fsq_id
    //   const placeImg = await getPhotos(placeImgId)

    //   console.log(placeImg)

    //   const placeContent = createPlaceHTML(place.name, place.location, placeImg, placeImg);
    //   $place.append(placeContent);
    // });
    for (let photoId of photoIds) {
      // Pide las fotos
      const photo = await getPhoto(/*photoId*/)
    }

    $destination.append(`<h2>${places[0].location.locality}</h2>`);
  } catch (error) {
    console.error(`error in renderPlaces(): ${error}`)
  }
};

const renderForecast = (forecast) => {
  const weatherContent = createWeatherHTML(forecast);
  $weatherDiv.append(weatherContent);
}

const executeSearch = async () => {
  // $placeDivs.forEach(place => place.empty());
  // $weatherDiv.empty();
  // $destination.empty();
  // $container.css("visibility", "visible")
  // ==> document.querySelector(`[data-id="input-for-something"]`).style.visibility = `visible`
  // getPlaces().then(places => renderPlaces(places));
  // getForecast().then(forecast => renderForecast(forecast));
  // return false;
  try {
    const places = await getPlaces()
    const forecast = await getForecast()
    const photos = getPhotos(places)
  } catch (error) {
    console.error()
  }
}

$submit.click(executeSearch);

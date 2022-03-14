const createPlaceHTML = (name, location, photoId) => {
    return `<h2>${name}</h2>
    <img class="placeimage" src=""/>
    <h3>Address:</h3>
    <p>${location.address} ${location.postcode}</p>
    <p>${location.locality}, ${location.region}</p>
    <p>${location.country}</p>
    <p>${photoId}<p>`;
  }
  
  const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;C</h2>
      <h2>Humidity: ${currentDay.main.humidity}%</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
        <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png" class="weathericon">`;
  }
  
  const kelvinToFahrenheit = k => (k - 273.15).toFixed(0);
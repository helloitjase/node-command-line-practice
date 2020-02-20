//built following this website https://pusher.com/tutorials/node-command-line-app
const axios = require('axios');
const APIKEY = require('./apiKey.js');

const getWeatherData = async(city) => {
  let response = await axios.get(`http://api.weatherstack.com/current?access_key=${APIKEY}&query=${city}`);
  response = response.data;
  const currWeather = {
    city,
    location: response.location.name,
    country: response.location.country,
    longitude: response.location.lon,
    location: response.location.lat,
    temparature: response.current.temperature + 'C',
  }
  console.log(currWeather);
}

const getForecast = async(city) => {
    let resp = await axios.get(`http://api.weatherstack.com/forecast?access_key=${APIKEY}&query=${city}&forecast_days=7&langage=en`);
    console.log(resp);


}


module.exports.getWeatherData = getWeatherData;
module.exports.getForecast = getForecast;

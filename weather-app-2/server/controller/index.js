const axios = require('axios');
const apiKey = require('../../api_keys.js')

module.exports = {
  getWeather: async (req, res) => {
    let city = req.body.city;
    let ref = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    try {
      let result = await axios.get(ref);
      res.send(result.data.main);
    } catch(err) {
      res.status(500).send(err);
    }
  }
}
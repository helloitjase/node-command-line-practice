import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      weatherInfo: ''
    }
    this.inputSearch = this.inputSearch.bind(this);
    this.searchForWeather = this.searchForWeather.bind(this);
  }

  searchForWeather(event) {
      axios.post('/weather/city', {
        city: this.state.search
      })
      .then((result) => {
        console.log(result.data);
        this.setState({
          weatherInfo: result.data
        })
      })
      .catch((err) => {
        console.log('err', err);
        this.setState({
          weatherInfo: 'Error, search a different city'
        })
      })
  }

  inputSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>Weather App</div>
        <div>
          <label>
            Search for weather in city:
            <input onChange={this.inputSearch} value={this.state.search} type="text"></input>
          </label>
          <button onClick={this.searchForWeather} >Search</button>
        </div>
        <div>
          {typeof this.state.weatherInfo === 'string' ? <div>{this.state.weatherInfo}</div> : <div>{this.state.weatherInfo.temp + 'F'}</div>}
        </div>
      </div>
    )
  }
}

export default App;
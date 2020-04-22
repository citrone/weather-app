const { RESTDataSource } = require('apollo-datasource-rest');

const { currentWeatherReducer, forecastReducer } = require('./reducers');

class WeatherAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://api.openweathermap.org/data/2.5/';
    }

    async getCurrentWeatherInfo(city) {
        this.city = city;
        const response = await this.get('weather');
        return currentWeatherReducer(response);
    }

    async getForecastInfo(city) {
        this.city = city;
        const response = await this.get('forecast');
        return forecastReducer(response);
    }

    async getCityCoordinates(city) {
        const response = await this.getCurrentWeatherInfo(city);
        return response.coords;
    }

    willSendRequest(request) {
        request.params.set('q', `${this.city}`);
        request.params.set('units', 'metric');
        request.params.set('appid', this.context.appKey);
    }
}

module.exports = WeatherAPI;

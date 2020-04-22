const { RESTDataSource } = require('apollo-datasource-rest');

const { currentWeatherReducer, forecastReducer } = require('./reducers');

class WeatherAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://api.openweathermap.org/data/2.5/';
    }

    async getCurrentWeatherInfo() {
        const response = await this.get('weather');
        return currentWeatherReducer(response);
    }

    async getForecastInfo() {
        const response = await this.get('forecast');
        return forecastReducer(response);
    }

    async getCityCoordinates(city) {
        const response = await this.getCurrentWeatherInfo();
        return response.coords;
    }

    willSendRequest(request) {
        request.params.set('q', 'Timisoara');
        request.params.set('units', 'metric');
        request.params.set('appid', this.context.appKey);
    }
}

module.exports = WeatherAPI;
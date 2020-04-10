const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://api.openweathermap.org/data/2.5/';
    }

    async getCurrentWeatherInfo() {
        const response = await this.get('weather');
        return this.currentWeatherReducer(response);
    }

    async getForecastInfo() {
        const response = await this.get('forecast');
        //console.log(this.forecastReducer(response));
        return this.forecastReducer(response);
    }

    willSendRequest(request) {
        request.params.set('q', 'Timisoara');
        request.params.set('units', 'metric');
        request.params.set('appid', this.context.appKey);
    }

    currentWeatherReducer(weatherInfo) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return {
            where: `${weatherInfo.name}, ${weatherInfo.sys.country}`,
            conditions: {
                date: new Date(weatherInfo.dt * 1000).toLocaleDateString("ro-RO", options),
                temperature: weatherInfo.main.temp,
                feelsLike: weatherInfo.main.feels_like,
                minimumTemperature: weatherInfo.main.temp_min,
                maximumTemperature: weatherInfo.main.temp_max,
                pressure: weatherInfo.main.pressure,
                humidity: weatherInfo.main.humidity,
                weather: weatherInfo.weather.map(crtWeather => {
                    return {
                        status: crtWeather.main,
                        description: crtWeather.description,
                        iconUrl: `http://openweathermap.org/img/wn/${crtWeather.icon}.png`
                    }
                })
            },
        }
    }

    forecastReducer(forecastInfo) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return {
            where: `${forecastInfo.city.name}, ${forecastInfo.city.country}`,
            conditions: forecastInfo.list.map(crtForecast => {
                return {
                    date: new Date(crtForecast.dt * 1000).toLocaleDateString("en-US", options),
                    temperature: crtForecast.main.temp,
                    feelsLike: crtForecast.main.feels_like,
                    minimumTemperature: crtForecast.main.temp_min,
                    maximumTemperature: crtForecast.main.temp_max,
                    pressure: crtForecast.main.pressure,
                    humidity: crtForecast.main.humidity,
                    weather: crtForecast.weather.map(crtWeather => {
                        return {
                            status: crtWeather.main,
                            description: crtWeather.description,
                            iconUrl: `http://openweathermap.org/img/wn/${crtWeather.icon}.png`
                        }
                    })
                }
            }),
        }
    }
}

module.exports = WeatherAPI;
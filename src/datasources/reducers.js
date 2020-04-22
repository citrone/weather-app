const currentWeatherReducer = (weatherInfo) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return {
        coords: {
            longitude: weatherInfo.coord.lon,
            latitude: weatherInfo.coord.lat
        },
        where: `${weatherInfo.name}, ${weatherInfo.sys.country}`,
        conditions: {
            date: new Date(weatherInfo.dt * 1000).toLocaleDateString("ro-RO", options),
            temperature: Math.round(weatherInfo.main.temp),
            feelsLike: Math.round(weatherInfo.main.feels_like),
            minimumTemperature: Math.round(weatherInfo.main.temp_min),
            maximumTemperature: Math.round(weatherInfo.main.temp_max),
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

const forecastReducer = (forecastInfo) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return {
        where: `${forecastInfo.city.name}, ${forecastInfo.city.country}`,
        conditions: forecastInfo.list.map(crtForecast => {
            return {
                date: new Date(crtForecast.dt * 1000).toLocaleDateString("en-US", options),
                temperature: Math.round(crtForecast.main.temp),
                feelsLike: Math.round(crtForecast.main.feels_like),
                minimumTemperature: Math.round(crtForecast.main.temp_min),
                maximumTemperature: Math.round(crtForecast.main.temp_max),
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

module.exports = {
    currentWeatherReducer,
    forecastReducer
}

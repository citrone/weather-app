module.exports = {
    Query: {
        getCurrentWeather: (_, __, { dataSources }) => 
            dataSources.weatherAPI.getCurrentWeatherInfo(),
        getForecast: (_, __, { dataSources }) =>
            dataSources.weatherAPI.getForecastInfo()
    }
}
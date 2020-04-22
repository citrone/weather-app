module.exports = {
    Query: {
        getCityLocation: (_, { city }, { dataSources }) =>
            dataSources.weatherAPI.getCityCoordinates(city),
        getCurrentWeather: (_, __, { dataSources }) => 
            dataSources.weatherAPI.getCurrentWeatherInfo(),
        getForecast: (_, __, { dataSources }) =>
            dataSources.weatherAPI.getForecastInfo()
    }
}
module.exports = {
    Query: {
        getCityLocation: (_, { city }, { dataSources }) =>
            dataSources.weatherAPI.getCityCoordinates(city),
        getOneCallWeather: (_, { city }, { dataSources }) =>
            dataSources.weatherAPI.getOneCallWeatherInfo(city),
        getCurrentWeather: (_, { city }, { dataSources }) => 
            dataSources.weatherAPI.getCurrentWeatherInfo(city),
        getForecast: (_, { city }, { dataSources }) =>
            dataSources.weatherAPI.getForecastInfo(city),
    }
}

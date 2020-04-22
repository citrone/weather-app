module.exports = {
    Query: {
        getCityLocation: (_, { city }, { dataSources }) =>
            dataSources.weatherAPI.getCityCoordinates(city),
        getCurrentWeather: (_, { city }, { dataSources }) => 
            dataSources.weatherAPI.getCurrentWeatherInfo(city),
        getForecast: (_, { city }, { dataSources }) =>
            dataSources.weatherAPI.getForecastInfo(city),
        getForecastDetailed: (_, { city }, { dataSources }) =>
            dataSources.weatherAPI.getDetailedForecastInfo(city)
    }
}

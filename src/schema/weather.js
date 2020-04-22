const { gql } = require('apollo-server');

const typeDefs = gql`
    type Weather {
        where: String
        conditions: Conditions
    }

    type Forecast {
        where: String
        conditions: [Conditions]
        weather: [[CurrentWeather]]
    }

    type Conditions {
        date: String
        temperature: Int
        feelsLike: Int
        minimumTemperature: Int
        maximumTemperature: Int
        pressure: Int
        humidity: Int
        weather: [CurrentWeather]
    }

    type CurrentWeather {
        status: String
        description: String
        iconUrl: String
    }

    type CityCoordinates {
        longitude: Float
        latitude: Float
    }

    type Query {
        getCityLocation(city: String): CityCoordinates
        getCurrentWeather(city: String): Weather
        getForecast(city: String): Forecast
        getForecastDetailed(city: String): Forecast
    }
`;

module.exports = typeDefs;
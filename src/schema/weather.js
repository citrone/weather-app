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
        temperature: Float
        feelsLike: Float
        minimumTemperature: Float
        maximumTemperature: Float
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
        getCurrentWeather: Weather
        getForecast: Forecast
    }
`;

module.exports = typeDefs;
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
    
    type OneCallWeather {
        currentWeather: InstantWeather
        forecastDaily: [ForecastDaily]
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

    type InstantWeather {
        date: String
        sunrise: String
        sunset: String
        temperature: Int
        feelsLike: Int
        pressure: Int
        humidity: Int
        windSpeed: Float
    }

    type ForecastDaily {
        date: String
        sunrise: String
        sunset: String
        temperature: ForecastTemperature
        pressure: Int
        humidity: Int
        windSpeed: Float
        rain: Float
    }

    type ForecastTemperature {
        temperature: Int
        minimumTemperature: Int
        maximumTemperature: Int
        nightTemperature: Int
        eveTemperature: Int
        morningTemperature: Int
    }

    type CityCoordinates {
        longitude: Float
        latitude: Float
    }

    type Query {
        getCityLocation(city: String): CityCoordinates
        getOneCallWeather(city: String): OneCallWeather
        getCurrentWeather(city: String): Weather
        getForecast(city: String): Forecast
    }
`;

module.exports = typeDefs;
const { ApolloServer } = require('apollo-server');
require('custom-env').env();

const typeDefs = require('./schema/weather');
const resolvers = require('./resolvers/weather');
const WeatherAPI = require('./datasources/weather');

const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dataSources: () => ({
            weatherAPI: new WeatherAPI()
        }),
        context: { appKey: process.env.WEATHER_API_KEY }
    }
);

module.exports = server;
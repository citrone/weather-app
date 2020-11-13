const app = require('./src/app');

// start server
app.listen(process.env.PORT || 4000).then(({url}) => console.log(`Server listening on: ${url}`))


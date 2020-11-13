const app = require('./src/app');

app.listen(process.env.PORT || 4000).then(({url}) => console.log(`Server listening on: ${url}`))


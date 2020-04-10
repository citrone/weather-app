const app = require('./src/index');

app.listen(process.env.PORT || 4000).then(({url}) => console.log(`Server listening on: ${url}`))


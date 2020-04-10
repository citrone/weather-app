const app = require('./src/index');

app.listen().then(({url}) => console.log(`Server listening on: ${url}`))


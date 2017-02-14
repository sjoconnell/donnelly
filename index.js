const config = require('./server/config/config');
const app = require('./server/server');


app.listen(config.port);
console.log(`app is running on port: ${config.port}`);
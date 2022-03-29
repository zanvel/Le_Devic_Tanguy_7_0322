const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const sequelize = require('./database/scriptDB');


server.listen( 3000 , () => {
    console.log('Server is listening on port : 3000' )
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

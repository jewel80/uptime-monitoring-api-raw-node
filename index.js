// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const envirolment = require('./helpers/environments')

console.log(envirolment.port);
// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(envirolment.port, () => {
        console.log(`listening to port ${envirolment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();

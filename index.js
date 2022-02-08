// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const envirolment = require('./helpers/environments')
// const data = require('./lib/data')

// app object - module scaffolding
const app = {};

// FOR Test...
// data.delete('test', 'newFile', (err) => {
//     console.log(`Error was, ${err}`);
// })


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

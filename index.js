//Dependencies
const http = require('http');


//app object - module scaffoling
const app = {}

//configuration
app.config = {
    port: 3000
}


//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port: ${app.config.port}`);
    })
}


//handle Request Response
app.handleReqRes = (req, res) => {
    res.end('Hello World!');
}


//start the server
app.createServer()
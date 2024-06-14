const express = require('express');
const cors = require('cors');
const corsOpts = require("./corsResponseHandler")
const {createConnection} = require('./db/connect');

const server = express();
server.use(express.json())
server.use(cors(corsOpts))

createConnection();

const wordRoutes = require('./routes/wordRoutes');
server.use('/words', wordRoutes);

module.exports = server;


server.listen(8080);
console.log("explore-engine-server listening on port : 8080");

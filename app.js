// Help identify JavaScript silent errors
'use strict';

// Import nessesary modules
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const http = require('http');

// Add enviromental variables defined in .env
dotenv.config();

// Initialise express app
let app = express();

// Serve files required by client
app.use(express.static(path.join(__dirname, process.env.STATIC_DIR)));

// Express Routing
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.STATIC_DIR, 'index.html'));
});

// Create and start the http server
http.createServer(app);

app.listen(process.env.PORT, () => {
    console.log('listening on 127.0.0.1:' + process.env.PORT);
});

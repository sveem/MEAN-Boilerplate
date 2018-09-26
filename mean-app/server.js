require('dotenv').config();
const express = require ('express');
const path = require ('path');
const http = require ('http');
const bodyParser = require('body-parser');
const config  = require('./server/config/config');
const api = require('./server/routes/api/routes');
// const db = require('./server/database/mongoDB/db');

const app = express();
/*
 Uncomment to use mongoDB
    db.connect()
*/

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/mean-app')));

app.use('/api', api);

// for direct"/" queries, make sure that index.html is returned
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/mean-app/index.html'));
});

app.set('port', config.httpPort);

const server = http.createServer(app);

server.listen(config.httpPort, () => console.log(`API running on localhost:${config.httpPort}`));

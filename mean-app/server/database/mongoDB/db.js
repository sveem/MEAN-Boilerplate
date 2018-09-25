const mongoose = require('mongoose');
const dbConfig = require('../../config/config').mongo;

const dbURL = dbConfig.connection;
mongoose.Promise = global.Promise;

module.exports.connect = () => mongoose.connect(dbURL);

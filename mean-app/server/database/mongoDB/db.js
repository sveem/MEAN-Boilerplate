const mongoose = require('mongoose');

const dbURL = process.env.MONGODB_URI; // Replace MONGODB_URI with your connection string
mongoose.Promise = global.Promise;

module.exports.connect = () => mongoose.connect(dbURL);

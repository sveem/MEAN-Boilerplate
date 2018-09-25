const mongoose = require('mongoose');

const { Schema } = mongoose;

const yourSchema = new Schema({
    id: Number,
    name: String,
    company: String,
    country: String
});

module.exports = mongoose.model('yourSchema', yourSchema, 'yourSchema');

const mongoose = require('mongoose')

const schemaRequest = new mongoose.Schema({
    idClient: String,
    idProduct: String,
    date: Number,
    status: String,
})

module.exports = schemaRequest
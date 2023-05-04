const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    idClient: String,
    idProduct: String,
    date: Number,
    status: String,
})

const model = mongoose.model('request', schema)

module.exports = model
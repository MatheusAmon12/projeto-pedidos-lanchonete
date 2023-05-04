const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    idClient: String,
    idProduct: String,
    date: String,
    status: String,
})

const model = mongoose.model('requests', schema)

module.exports = model
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    tel: Number,
    adress: String,
})

const model = mongoose.model('clients', schema)

module.exports = model
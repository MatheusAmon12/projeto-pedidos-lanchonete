const mongoose = require('mongoose')

const schemaProducts = new mongoose.Schema({
    name: String,
    price: Number,
})

module.exports = schemaProducts
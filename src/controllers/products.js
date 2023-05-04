const ProductsModel = require('../models/products')

async function post(req, res){
    const {
        name,
        price,
    } = req.body

    const register = new ProductsModel({
        name,
        price,
    })

    register.save()

    res.send({
        message: 'success'
    })
}

module.exports = {
    post,
}
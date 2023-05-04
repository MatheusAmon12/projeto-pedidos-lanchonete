const ProductsModel = require('../models/products')

async function get(req, res){
    const products = await ProductsModel.find()

    res.send({
        products
    })
}

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
    get,
    post,
}
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

async function put(req, res){
    const { id } = req.params

    //PASSANDO O ID PARA O MÉTODO, EM SEGUIDA AS INFORMAÇÕES ATUALIZADAS QUE SERÃO INSERIDAS E RETORNANDO O PRODUTO ATUALIZADO
    const product = await ProductsModel.findByIdAndUpdate({ _id: id }, req.body, {new: true})

    res.send({
        message: 'success',
        product,
    })
}

module.exports = {
    get,
    post,
    put,
}
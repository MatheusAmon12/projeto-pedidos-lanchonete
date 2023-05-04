const RequestsModel = require('../models/requests')

async function get(req, res){
    const requests =  await RequestsModel.find()

    res.send({
        requests
    })
}

async function post(req, res){
    const {
        idClient,
        idProduct,
        date,
        status,
    } = req.body

    const register = new RequestsModel({
        idClient,
        idProduct,
        date,
        status,
    })

    register.save()

    res.send({
        message: 'success'
    })
}

async function remove(req, res){
    const { id } = req.params

    const remove = await RequestsModel.deleteOne({ _id: id })

    const message = remove ? 'success' : 'error'

    res.send({
        message
    })
}

module.exports = {
    get,
    post,
    remove,
}
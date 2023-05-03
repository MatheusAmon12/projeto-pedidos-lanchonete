const ClientModel = require('../models/clients')

async function get(req, res){
    //procurando por todos os clientes registrados
    const clients = await ClientModel.find()

    res.send(clients)
}

async function post(req, res){
    //capturando os dados do formulário
    const {
        name,
        email,
        tel,
        adress,
    } = req.body

    //inserindo os dados na tabela de clientes
    const register = new ClientModel({
        name,
        email,
        tel,
        adress,
    })

    register.save()

    res.send({
        message: "success"
    })
}

module.exports = {
    get,
    post,
}
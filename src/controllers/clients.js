const ClientModel = require('../models/clients')

async function post(req, res){
    const {
        name,
        email,
        tel,
        adress,
    } = req.body

    console.log(req.body)

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
    post,
}
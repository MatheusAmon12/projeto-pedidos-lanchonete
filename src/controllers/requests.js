const RequestsModel = require('../models/requests')



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

module.exports = {
    post,
}
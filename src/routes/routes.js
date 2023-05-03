const router = require('express').Router()

const ClientsController = require('../controllers/clients')
const ProductsController = require('../controllers/products')

//outer.get('/clientes:id?', ClientsController.get)
router.post('/clientes', ClientsController.post)

module.exports = router
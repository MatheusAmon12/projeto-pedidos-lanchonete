const router = require('express').Router()

const ClientsController = require('../controllers/clients')
const ProductsController = require('../controllers/products')
const RequestsController = require('../controllers/requests')

//ROTAS RELACIONADAS AOS CLIENTES
router.get('/clientes/:id?', ClientsController.get)
router.post('/clientes', ClientsController.post)
router.delete('/clientes/:id', ClientsController.remove)

//ROTAS RELACIONADAS AOS PRODUTOS
router.get('/produtos/:id?', ProductsController.get)
router.post('/produtos/', ProductsController.post)
router.put('/produtos/:id', ProductsController.put)
router.delete('/produtos/:id', ProductsController.remove)

//ROTAS RELACIONADAS AOS PEDIDOS
//router.get('/pedidos/:id?', RequestsController.get)
router.post('/pedidos', RequestsController.post)

module.exports = router
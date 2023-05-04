const router = require('express').Router()

const ClientsController = require('../controllers/clients')
const ProductsController = require('../controllers/products')

//ROTAS RELACIONADAS AOS CLIENTES
router.get('/clientes/:id?', ClientsController.get)
router.post('/clientes', ClientsController.post)
router.delete('/clientes/:id', ClientsController.remove)

//ROTAS RELACIONADAS AOS PRODUTOS
//router.get('/produtos/:id?', ProductsController.get)
router.post('/produtos/', ProductsController.post)
//router.put('/produtos/:id', ProductsController.put)
//router.delete('/produtos/:id', ProductsController.remove)

module.exports = router
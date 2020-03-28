'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router()
const userCtrl = require('../controllers/user')

api.get('/product', auth, ProductCtrl.getProducts)
api.get('/product/:productId', ProductCtrl.getProduct)
api.post('/product',auth, ProductCtrl.saveProduct)
api.put('/product/:productId',auth, ProductCtrl.updateProduct)
api.delete('/product/:productId',auth,  ProductCtrl.deleteProduct)
api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)
api.get('/private',auth, function(req, res){
    res.status(200).send({message: `Tienes acceso`})
})

module.exports = api
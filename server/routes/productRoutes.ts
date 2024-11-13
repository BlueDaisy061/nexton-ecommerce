const express = require('express');

const router = express.Router();
const productsControllers = require('../controllers/productController');

router.get('/all-products', productsControllers.getAllProducts);

router.post('/add-product', productsControllers.addNewProduct);

router.delete('/remove-products', productsControllers.removeProducts);

module.exports = router;

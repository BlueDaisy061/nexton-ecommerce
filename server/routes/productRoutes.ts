const express = require('express');

const router = express.Router();
const productsControllers = require('../controllers/productController');

router.get('/all-products', productsControllers.getAllProducts);
router.get('/:pid', productsControllers.getProductById);
router.get('/detail/:pid', productsControllers.getProductDetailById);

router.post('/add-product', productsControllers.addNewProduct);

router.delete('/remove-products', productsControllers.removeProducts);

module.exports = router;

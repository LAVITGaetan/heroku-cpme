const productController = require('../controllers/productController.js');

const router = require('express').Router();

router.post('/addProduct', productController.addProduct)

router.get('/all', productController.getAllProducts)

router.get('/published', productController.publishedProduct)



router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router
const express = require('express');
const router = express.Router();

const Product = require('../controller/Product');
const CheckAdmin = require('../middleware/CheckAdmin');

router.post('/post-product',CheckAdmin , Product.upload, Product.postProduct);
router.get('/', CheckAdmin, Product.getAllProduct);
router.delete('/delete-product',CheckAdmin, Product.deleteAProduct);
router.get('/:idProduct', CheckAdmin, Product.getAProduct);


module.exports = router;
const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const {products_list,products_info} = require('../controllers/productsController');
const {sign} = require('../controllers/userController');
/* GET home page. */
router.get('/', indexController.index);
router.get('/produits', products_list);
router.get('/produits/:idproduct', products_info);

router.get('/inscription',sign);
module.exports = router;

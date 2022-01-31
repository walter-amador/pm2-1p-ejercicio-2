const { Router } = require('express');
const productTypeController = require('./../controllers/productType.controller');
const router = Router();

router.get('/all', productTypeController.all);

router.post('/new', productTypeController.new);

router.put('/update/:id', productTypeController.update);

router.delete('/delete/:id', productTypeController.delete);

module.exports = router;
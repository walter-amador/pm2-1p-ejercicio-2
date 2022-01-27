const { Router } = require("express");
const router = Router();
const rootController = require('../controllers/initialController');

//router.get('/', rootController.root);

router.get('/another', rootController.another);

module.exports = router;
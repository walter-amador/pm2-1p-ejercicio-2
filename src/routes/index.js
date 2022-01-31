const { Router } = require("express");
const router = Router();
const rootController = require('../controllers/initialController');


//Persons example route (Code will be refactored on next releases)
router.use("/persons", require('./persons.routes'));

router.use('/productType', require('./productTypes.routes'));

router.get('/another', rootController.another);


module.exports = router;
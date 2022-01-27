const { Router } = require('express');
const personsController = require('../controllers/personsController');
const router = Router();

//Initial route - testing purposes only
router.get('/', personsController.initiate);

//Route for listing all persons
router.get('/all', personsController.personsList);

//Route for adding a new person
router.post('/new', personsController.savePerson);

//Route for updating one person by id
router.put('/update/:id', personsController.update);

module.exports = router;

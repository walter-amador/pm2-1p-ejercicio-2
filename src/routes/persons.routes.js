const { Router } = require('express');
const personsController = require('../controllers/persons.controller');
const validatorHandler = require('./../middleware/validatos.handler');
const { createPersonSchema, updatePersonSchema, getPersonSchema, deletePersonSchema } = require('./../schemas/products.schema');

const router = Router();



//Initial route - testing purposes only
router.get('/', personsController.initiate);

//Route for listing all persons
router.get('/all', personsController.personsList);

//Route for adding a new person
router.post('/new', 
    validatorHandler(createPersonSchema, 'body'),
    personsController.savePerson
);

//Route for updating one person by id
router.put('/update/:id', 
    validatorHandler(getPersonSchema, 'params'),
    validatorHandler(updatePersonSchema, 'body'),
    personsController.update
);

//Route for deleting one person by id
router.delete('/delete/:id',
    validatorHandler(deletePersonSchema, 'params'),
    personsController.delete
);

module.exports = router;

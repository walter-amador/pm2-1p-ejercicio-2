const personModel = require('../models/person.model');

//Function for listing all persons on database
exports.personsList = async (req, res) => {
    try {
        
        //Calling findAll from personModel to retrieve all rows in the database
        const personList = await personModel.findAll();
    
        res.status(200).json({
            status: 'ok',
            persons: personList
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({status: 'failed'});
    }
};

//Function for creating a new person on the database
exports.savePerson = async (req, res) => {
    try{
        console.log({...req.body});
        //Calling create method from personModel and passing variables by destructuring object from req.body
        const person = await personModel.create({...req.body});
    
        //Sending status 200 showing that it was successfully written in the database
        res.status(201).json({
            status: 'ok',
            result: person
        });
    }catch(err){
        console.log(err);
        //Sending status 500 showing that there was something wrong with the server
        res.status(500).json({status:'Something went wrong'});
    }
}

//Function for updating on person on the database based on the id sent by a param
exports.update = async (req, res) => {
    //Extracting id from req.params
    const { id } = req.params;
    
    try{
        //Calling update function and passing a destructuring of req.body with the fields to update
        //Second parameter receives a where clause to specify the person_id of the row that wants to be updated
        const result = await personModel.update({...req.body}, {
            where: {
                person_id: id
            }
        });

        //Responding by showing that the fields have been updated successfully
        res.status(200).json({
            status: 'ok',
            person_id: id,
            updated_fields: result
        });
    }catch (err) {
        res.status(400).send('Algo salió mal: '+ err);
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await personModel.destroy({
            where: {
                person_id: id
            }
        });

        res.status(200).json({
            status: 'ok',
            result: result
        });
    } catch (error) {
        res.status(400).send('Algo salió mal: '+ err);
    }
}

//Function for testing purposes only
exports.initiate = (req, res) => {
    res.send('Hello, you are located at the persons controller');
}
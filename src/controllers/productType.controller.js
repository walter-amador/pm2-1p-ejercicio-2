const productTypeModel = require('./../models/productType.model');

//Function for listing all persons on database
exports.all = async (req, res) => {
    try {
        
        //Calling findAll from productTypeModel to retrieve all rows in the database
        const types = await productTypeModel.findAll();
    
        res.status(200).json({
            status: 'ok',
            types: types
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({status: 'failed'});
    }
};

//Function for creating a new person on the database
exports.new = async (req, res) => {
    try{
        //Calling create method from productTypeModel and passing variables by destructuring object from req.body
        const type = await productTypeModel.create({...req.body});
    
        //Sending status 200 showing that it was successfully written in the database
        res.status(201).json({
            status: 'ok',
            result: type
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
        const productType = await productTypeModel.findByPk(id);
        const result = await productType.update({...req.body});

        //Responding by showing that the fields have been updated successfully
        res.status(200).json({
            status: 'ok',
            product_type_id: id,
            updated_fields: result
        });
    }catch (err) {
        res.status(400).send('Algo salió mal: '+ err);
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const person = await productTypeModel.findByPk(id);

        if(!person){
            throw new Error('No se encontró el id');
        }
        const result = await person.destroy();

        res.status(200).json({
            status: 'ok',
            result: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}

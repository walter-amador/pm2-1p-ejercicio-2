function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const {error} = schema.validate(data, {abortEarly: false});

        if (!error) {
            next();
        }else{

            res.status(400).json({
            status: 'failed',
            error
            });
        }
    };
}

module.exports = validatorHandler;

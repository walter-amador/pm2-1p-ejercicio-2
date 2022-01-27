const express = require("express");
const morgan = require("morgan");

//Using dotenv package in order to use ENVIRONMENTAL VARIABLES
require('dotenv').config();

//Initializing app
const app = express();
const port = process.env.APP_PORT;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('json spaces',2);


//Initialize app to listen to the given port
app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
});

//First example route
app.get('/', function (req, res) {
    res.send('Hello World!');
});

//Second example route
app.use("/api/", require('./routes'));

//Persons example route (Code will be refactored on next releases)
app.use("/api/persons/", require('./routes/personsRoutes'));


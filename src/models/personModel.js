const sequelize = require('sequelize');
const db = require('../config/db');

//Model creation for persons
const Person = db.define("person",
    {
        person_id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: sequelize.STRING(45),
            allowNull: false
        },
        lastname:  {
            type: sequelize.STRING(45),
            allowNull: false
        },
        phone_number: {
            type: sequelize.STRING(45),
            allowNull: false
        },
        image: {
            type: sequelize.STRING(255),
            allowNull: true
        },
        status: {
            type: sequelize.CHAR(3),
            allowNull: false,
            defaultValue: 'ACT'
        }
    },
    {
        tableName: 'persons',
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = Person;
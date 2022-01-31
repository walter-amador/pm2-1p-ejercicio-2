const sequelize = require('sequelize');
const db = require('../config/db');

//Model creation for persons
const ProductType = db.define("Product_types",{
        productTypeId: {
            field: 'product_type_id',
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        status: {
            type: sequelize.STRING(3),
            allowNull: false
        },
        image: {
            type: sequelize.STRING(255),
            allowNull: false
        }
    },
    {
        tableName: 'Product_types',
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = ProductType;
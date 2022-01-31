const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(45);
const lastname = Joi.string().min(1).max(45);
const phone_number = Joi.string().min(8).max(45);
const image = Joi.string().uri();
const status = Joi.string().valid('ACT','INA');

const createPersonSchema = Joi.object({
    name: name.required(),
    lastname: lastname.required(),
    phone_number: phone_number.required(),
    image: image.required(),
    status: status.required(),
});

const updatePersonSchema = createPersonSchema;

const getPersonSchema = Joi.object({
    id: id.required()
});

const deletePersonSchema = Joi.object({
    id: id.required()
});

module.exports = { createPersonSchema, updatePersonSchema, getPersonSchema, deletePersonSchema };

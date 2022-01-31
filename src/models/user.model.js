const sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define("user",{
    user_id: {},
    person_id: {},
    username: {},
    email: {},
    password: {},
    status: {},
    recover_pin: {},
    user_type: {},
    register_date: {},
    update_info_date: {},
});

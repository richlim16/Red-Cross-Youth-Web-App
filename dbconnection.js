const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('fh760xjq4bv7hcgj', 'm6kvxzjvw4fvofsl', 'exxzpyih9awp6pa1', {
    host: 'lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

try{
    sequelize.authenticate();
}catch(e){
    console.log(e)
}

exports.sequelize = sequelize;

/*
    host:"lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"m6kvxzjvw4fvofsl",
    password:"exxzpyih9awp6pa1",
    database:"fh760xjq4bv7hcgj"
*/
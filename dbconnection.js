const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('rcy_db', 'root', '', {
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
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('rcy_db', 'root', '', {
    logging:false,//na samokan ko when i was running my tests, remove this line if you need to see the logs lang
    host: 'localhost',
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
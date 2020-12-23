'use strict';

module.exports = {
  up: async (queryInterface, Sequelize)=>{
  queryInterface.addColumn('chapter_personnel', 'user_id',{
    type:Sequelize.BIGINT,
    allowNull: false,
    references:{
      model:'users',
      key:'id'
    },
    after: 'id'
  });    
},

  down: async (queryInterface, Sequelize)=>{
  queryInterface.removeColumn('chapter_personnel', 'user_id');    
  }
};
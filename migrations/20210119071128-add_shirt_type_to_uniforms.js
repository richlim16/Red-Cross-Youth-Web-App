'use strict';

module.exports={
  up:async(queryInterface,Sequelize)=>{
    queryInterface.addColumn('uniform_request_forms','shirt_for',{
    type:Sequelize.ENUM('RCY','Council Adviser'),
    allowNull: false,
    after: 'uniform_type'
    });
  },

  down:async(queryInterface,Sequelize)=>{
    queryInterface.removeColumn('uniform_request_forms','shirt_for');
  }
};
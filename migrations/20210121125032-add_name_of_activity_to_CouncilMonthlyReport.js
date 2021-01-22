'use strict';

module.exports = {
  up: async (queryInterface, Sequelize)=>{
  queryInterface.addColumn('council_monthly_reports', 'name_of_activity',{
    type:Sequelize.STRING,
    allowNull: false,
    after: 'for_the_month_of'
  });
},

  down: async (queryInterface, Sequelize)=>{
  queryInterface.removeColumn('council_monthly_reports','name_of_activity');
  }
};
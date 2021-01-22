'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('council_monthly_reports', 'year',{
      type:Sequelize.INTEGER,
      allowNull: false,
      after: 'for_the_month_of'
    });
    queryInterface.changeColumn('council_monthly_reports', 'for_the_month_of', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('council_monthly_reports','year');
  }
};

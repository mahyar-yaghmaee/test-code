// Example migration

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('applications', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      monolith_application_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {type: Sequelize.DATE, allowNull: false},
      updated_at: {type: Sequelize.DATE, allowNull: false},
      deleted_at: {type: Sequelize.DATE}
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('applications')
  }
};

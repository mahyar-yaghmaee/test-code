// Example model
const Sequelize = require('sequelize')

module.exports = db => {
  return db.define('application', {
    id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true},
    monolith_application_id: {type: Sequelize.INTEGER, allowNull: false}
  })
}

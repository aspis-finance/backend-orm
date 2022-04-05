/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const init = (username, password, host, port, database) => {
  const fs = require('fs')
  const path = require('path')
  const Sequelize = require('sequelize')
  const basename = path.basename(__filename)
  const env = process.env.NODE_ENV || 'development'
  const config = require(`${__dirname}/../config/config.json`)[env]
  const db = {}

  let sequelize
  if (config.use_env_variable) {
    sequelize = new Sequelize(
      `postgres://${username}:${password.replace(/%(?![0-9][0-9a-fA-F]+)/g, '%25')}@${host}:${port}/${database}`,
      config
    )
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config)
  }

  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
      db[model.name] = model
    })

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })

  db.sequelize = sequelize
  db.Sequelize = Sequelize
  return db
}

module.exports = init

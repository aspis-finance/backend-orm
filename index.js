const orm = require('./orm')

module.exports = (username, password, host, port, database) => orm(username, password, host, port, database)

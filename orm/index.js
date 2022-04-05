const init = require('./models')

module.exports = (username, password, host, port, database) => init(username, password, host, port, database)

const { config } = require('./../config/config');

const currentConfig = config[config.env];
const USER = encodeURIComponent(currentConfig.dbUser);
const PASSWORD = encodeURIComponent(currentConfig.dbPassword);
const URI = `${currentConfig.dialect}://${USER}:${PASSWORD}@${currentConfig.dbHost}:${currentConfig.dbPort}/${currentConfig.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: currentConfig.dialect,
  },
  production: {
    url: URI,
    dialect: currentConfig.dialect,
  }
}

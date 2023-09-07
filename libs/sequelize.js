const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');
const currentConfig = config[config.env];
const USER = encodeURIComponent(currentConfig.dbUser);
const PASSWORD = encodeURIComponent(currentConfig.dbPassword);
const URI = `${currentConfig.dialect}://${USER}:${PASSWORD}@${currentConfig.dbHost}:${currentConfig.dbPort}/${currentConfig.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: currentConfig.dialect,
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;

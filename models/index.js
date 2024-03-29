const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.js')["development"];

const db = {};

const sequelize = new Sequelize('demo', 'root', 'root', config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
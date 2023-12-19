const { Sequelize } = require('sequelize')


const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './tasksDatabse.sqlite'
    }
)
//crear el objeto a exportar
const db = {};
db.sequelize = sequelize;
//pasarle la clase
db.Sequelize = Sequelize;
db.Tasks = require('../models/Tasks')(sequelize,Sequelize);
db.Users = require('../models/Users')(sequelize,Sequelize);

//Relationship
db.Users.hasMany(db.Tasks);
db.Tasks.belongsTo(db.Users);
module.exports = db;
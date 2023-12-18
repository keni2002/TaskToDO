const { Sequelize } = require('sequelize')

const db = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './tasksDatabse.sqlite'
    }
)



module.exports = db;
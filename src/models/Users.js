
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            type: Sequelize.DataTypes.UUID,
            dafaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true
        },
        user: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        }
    });
    return Users

}
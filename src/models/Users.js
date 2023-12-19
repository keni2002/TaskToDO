
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
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
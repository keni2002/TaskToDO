
module.exports = (sequelize, Sequelize) => {
    const Tasks = sequelize.define("tasks", {
        title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.DataTypes.TEXT
        },
        targetdate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
        },
        checked: {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Tasks

}
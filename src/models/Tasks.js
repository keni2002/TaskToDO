
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
        },
        userId: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            references:{
                model: 'users',
                key: 'id'
            } 
            
        }
    });
    return Tasks

}
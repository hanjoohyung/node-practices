const {DataTypes} = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('User', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true    
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            alloNull: false // DB에 TABLE 속성에 NOT NULL과 같음
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(200),
            alloNull: false
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(45),
            alloNull: false
        }, 
        gender: {
            field: 'gender',
            type: DataTypes.ENUM('male', 'female'),
            alloNull: false
        },
        role: {
            field: 'role',
            type: DataTypes.ENUM('ADMIN', 'USER'),
            alloNull: false,
            defaultValue: 'USER'
        },
     }, {
         underscored: true,
         freezeTableName: true,
         timestamps: false,
         createAt: false,
         updateAt: false,
         tableName: 'user'
     });
}





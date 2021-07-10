const { Model, DataTypes } = require('sequelize');

class User extends Model {
    // son los que se pueden invocar sin hacer una instanca de la clase
    static init(sequelize) {
        return super.init(
            // genero atributos
            {
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                fullname: {
                    type: DataTypes.STRING,
                    allowNull: false

                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true

                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            }, {
            //colocar las opciones
            modelName: 'users',
            sequelize, 
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
        );// metodo que esta implementado en clase padre Model

    }

};
module.exports= {User};


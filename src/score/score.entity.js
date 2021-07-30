const { Model, DataTypes } = require('sequelize');

class UserScore extends Model {
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
                date: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    primaryKey: true

                },
                score: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true

                }
            }, {
            //colocar las opciones
            modelName: 'scores',
            //freezeTableName: true, para que no pluralice el nombre si era score
            sequelize, 
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
        );// metodo que esta implementado en clase padre Model

    }   
      

};
module.exports= {UserScore};
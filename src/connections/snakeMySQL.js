const {Mysql, DataTypes, Model}=require('../../database/mysql/mysql');
//en esta capa agrego el nombre de la base
const dbSanake = 
    {
        database:'snake',
        username:'',
        password:'',
        dbConfig:{
            host:'localhost'
        }
    };
module.exports = {Mysql, dbSanake, DataTypes, Model}; // agregamos una capa mas 

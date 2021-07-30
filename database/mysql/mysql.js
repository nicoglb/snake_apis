const { Sequelize, DataTypes, Model } = require('sequelize');

const dbConfig = {
    host: '',
    dialect: 'mysql'
}

class Mysql extends Sequelize {
    constructor(config) {
        super(config.database, config.username, config.password, Object.assign(dbConfig, config.dbConfig));
        this.config = {
            database: '',
            username: '',
            password: '',
            dbConfig: dbConfig
        };//del objeto que se crea en el momento
        this.config = Object.assign(this.config, config);
    }
}
module.exports = { Mysql, DataTypes, Model }
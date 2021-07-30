const prompt = require('prompt-sync')();
const { app } = require('./src/main');
const { Mysql, dbSanake } = require('./src/connections/snakeMySQL');
const { User } = require('./src/users/users.entity');
const { UserScore } = require('./src/score/score.entity');
app.listen(3000, () => console.log('Server listen port 3000...'));
//inicializo la base de datos para que el server se encargue de eso
const initMySql = async (login) => {
    try {
        let configDB = {
            database: dbSanake.database,
            username: login.username,
            password: login.password,
            dbConfig: dbSanake.dbConfig
        };
        // configDB=object.assign(configDB,dbSanake);
        console.log(configDB);
        mysql = new Mysql(configDB);
        console.log('Test MySQL');
        await mysql.authenticate();
        console.log('OK connection..');
    
        //Users, este es un metodo de la clase y no del objeto
        // por ello es que se llama asi y es estatico
        User.init(mysql);
        UserScore.init(mysql);
    } catch (error) {
        console.error(error);
    }

}
var user = prompt('Ingrese usuario DB: ')
var pass = prompt('Ingrese clave: ',{echo: '*'})
initMySql({ username: user, password: pass });  
//initMySql({ username: 'nico', password: '12345' });
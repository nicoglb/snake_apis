const express = require('express');
const router = express.Router();
//const {getUsers} = require('./users.controller');
const controller = require('./users.controller');

router.get('/', (req, res) => {
    try {
        //let users  = getUsers(); eso si usamos el otro require
        //let users = controller.getUsers();
        //en rutas lo manejamos como una promesa
        controller.getUsers().then((users) => {
            res.status(200);
            res.send(users);
        }
        ).catch((error) => {
            res.sendStatus(500);
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }
});

router.get('/:username', (req, res) => {
    let id = req.params.username;
    try {
        //let encontrado = controller.getUser(id);
        controller.getUser(id).then
            ((encontrado) => {
                if (encontrado){
                    console.log( 'routes: '+ JSON.stringify(encontrado));
                    res.status(200);
                    res.send(JSON.stringify(encontrado));
                }
                else {
                    res.status(404);
                    res.send('No encontrado');
                }

                
            }
            ).catch((error) => {
                res.sendStatus(500);
            });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

router.post('/new', (req, res) => {
    const user = req.body;
    //console.log(user);
    try {
        //let nuevo = controller.createUser(user);
        controller.createUser(user).then
            ((nuevo) => {
                res.status(200);
                res.send(nuevo);
            }
            ).catch((error) => {
                console.log(error);
                res.sendStatus(500);

            });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//rutas deberia ser el pasamano y controller quien hace esta logica de control
router.put('/update/:username', (req, res) => {
    const id = req.params.username;
    const user = req.body;
    console.log(user);
    try {
        //let modificado = controller.updateUser(id,user);
      controller.updateUser(id, user).then
            ((modificado) => {
                if (modificado) {
                    res.status(200);
                    res.send(modificado);
                }
                else
                    res.sendStatus(404)
            }
            ).catch((error) => {
                console.log(error);
                res.sendStatus(500);

            });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


router.delete('/delete/:username', (req, res) => {
    let id = req.params.username;
    try {
        //let eliminado = controller.deleteUser(id);
        controller.deleteUser(id).then
            ((eliminado) => {
                if (eliminado) {
                    res.status(200);
                    res.send(eliminado);
                }
                else{
                    res.sendStatus(404); //eliminado===undefined significa que no lo encontre, devuelvo 404
                }
            }
            ).catch((error) => {
                console.log(error);
                res.sendStatus(500);

            });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


// module.exports = { router };
module.exports = router;
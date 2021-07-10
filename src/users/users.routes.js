const express = require('express');
const router = express.Router();
//const {getUsers} = require('./users.controller');
const controller = require('./users.controller');

router.get('/', (req, res) => {
    try {
        //let users  = getUsers();
        // let users = controller.getUsers();
        //en rutas lo manejamos como una promesa
        controller.getUsers().then((users) => {
            res.status(200);
            res.send(users);
        }
        ).catch((eror) => {
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
        controller.getUser(id).then 
        ((users) => {
            res.status(200);
            res.send(users);
        }
        ).catch((eror) => {
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
        let nuevo = controller.createUser(user).then 
        ((users) => {
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
        let modificado = controller.updateUser(id, user).then 
        ((users) => {
            res.status(200);
            res.send(modificado);
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
        let eliminado = controller.deleteUser(id).then 
        ((users) => {
            res.status(200);
            res.send(eliminado);
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
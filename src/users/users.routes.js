const express = require('express');
const router = express.Router();
//const {getUsers} = require('./users.controller');
const controller = require('./users.controller');

router.get('/', (req, res) => {
    try {
        //let users  = getUsers();
        let users = controller.getUsers();
        res.status(200);
        res.send(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }
});

router.get('/:username', (req, res) => {
    let id = req.params.username;
    try {
        let encontrado = controller.getUser(id);
        res.status(200);
        res.send(encontrado);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

router.post('/new', (req,res) => {
    const user = req.body;
    //console.log(user);
    try{
        let nuevo = controller.createUser(user);
        res.status(200);
        res.send(nuevo);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//rutas deberia ser el pasamano y controller quien hace esta logica de control
router.put('/update/:username',(req,res) => {
    const id = req.params.username;
    const user = req.body;
    console.log(user);
    try{
        let modificado = controller.updateUser(id,user);
        if (modificado) {
            res.status(200);
            res.send(modificado);
        }
        else{
            res.sendStatus(404)
            //preguntar a Adri o ver documentacion
            //Fer manda res.json
        }
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


router.delete('/delete/:username',(req,res) => {
    let id = req.params.username;
    try {
        let eliminado = controller.deleteUser(id);
        if (eliminado) {
            res.status(200);
            res.send(eliminado);
        }
        else{
            res.sendStatus(404); //eliminado===undefined significa que no lo encontre, devuelvo 404
        }

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


// module.exports = { router };
module.exports = router;
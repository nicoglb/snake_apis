const express = require('express');
const router = express.Router();
const scoreController = require('./score.controller')

router.get('/', scoreController.getAllScores);

router.get('/:username', (req, res) => {
    const username = req.params.username
    //res.send(scoreController.getUserScores(username))

    scoreController.getUserScores(username)
        .then((UserScores) => {
            if (UserScores.length !== 0) {
                //console.log(UserScores);
                res.status(200);
                res.send(JSON.stringify(UserScores));
            } else {
                res.status(404);
                res.send(`Username: ${username} Not Found`);
            }
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
            res.sendStatus(500);
        })
})

router.put('/:username', (req, res) => {
    const username = req.params.username
    const score = req.body;
    //console.log(score);
    //res.send(scoreController.putUserScore(username, score))
    scoreController.putUserScore(username,score)
        .then((UserScore) => {
            if (UserScore) {
                //console.log(UserScores);
                res.status(200);
                res.send(JSON.stringify(UserScore));
            } else {
                res.status(404);
                res.send(`Username: ${username} Not Found`);
            }
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
            res.sendStatus(500);
        })



})

router.get('/max/:username', scoreController.getMaxUserScore)

router.get('/last/:username', (req, res) => {
    const user = req.params.username
    //res.send(scoreController.getLastUserScore(user))
    scoreController.getLastUserScore(user)
        .then((UserScore) => {
            res.status(200);
            res.send(JSON.stringify(UserScore));
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;
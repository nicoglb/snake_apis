const scoreService = require('./score.service')

const getAllScores = (req, res) => {
    //res.send(scoreService.getScoreList())

    scoreService.getScoreList()
        .then((scoreList) => {
            console.log('RANKING: '+scoreList)
            res.status(200);
            res.send(scoreList)
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
            res.sendStatus(500);
        })
}

const getUserScores = async (user) => {
    return await scoreService.getUserScores(user)
}

const getMaxUserScore = (req, res) => {
    const user = req.params.username
    //res.send(scoreService.getUserScores(user).reduce((max, other) =>
    //   max = max.score > other.score ? max : other))
    scoreService.getMaxUserScore(user)
        .then((UserScore) => {
            res.status(200);
            res.send(JSON.stringify(UserScore));
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
            res.sendStatus(500);
        })
}

const getLastUserScore = async (user) => {

    //return scoreService.getUserScores(user).reduce((last, other) =>
    //  last = last.date > other.last ? last : other)

    return await scoreService.getLastUserScore(user)

}

const postUserScore = async (score) => {

    return await scoreService.newUserScores(score)

}

const getRanking = async()=>{
    return await scoreService.rankingScore();
}

module.exports = { getAllScores, getUserScores, getMaxUserScore, getLastUserScore, postUserScore,getRanking }
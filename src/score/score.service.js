const { UserScore } = require('./score.entity');
const { Sequelize } = require('sequelize');

const scoreList = [{
    username: 'nico',
    scores: [{
        date: '20/07/2021',
        score: '10'
    },
    {
        date: '19/07/2021',
        score: '20'
    }]
}, {
    username: 'cele',
    scores: [{
        date: '21/07/2021',
        score: '30'
    },
    {
        date: '21/07/2021',
        score: '40'
    }]
},
{
    username: 'gaby',
    scores: [{
        date: '18/07/2021',
        score: '20'
    }]
}]

const getScoreList = async() =>{
    //return scoreList
    //console.log(await UserScore.findAll());
    return await UserScore.findAll();
}

const getUserScores = async(user) => {
    //deberia estar ordenado por fecha, manejar eso cuando los inserto u ordernar aca
    return await UserScore.findAll({
        attributes: ['date', 'score'],
        where: {
            username: user
          }
      });
    //return scoreList.find(u => u.username === user).scores

}

const getMaxUserScore = async(user) => {
    console.log(Sequelize.sequelize);
    return await UserScore.findAll({
        attributes: ['date', [Sequelize.fn('max', Sequelize.col('score')), 'score'] ],
        where: {
            username: user
          }
      });

}

const getLastUserScore = async(user) => {
    return await UserScore.findAll({
        attributes: [[Sequelize.fn('max', Sequelize.col('date')), 'date'], 'score'],
        where: {
            username: user
          }
      });
      
}

const newUserScores = async(score) => {
     
    const nuevo = await UserScore.create({
        username: score.username,
        date: score.date,
        score: score.score,
      });

    /* let idx = scoreList.findIndex(u => u.username === user) 

    if ( idx >= 0) {
        scoreList[idx].scores.unshift(score)
        //puedo validar si lo agrego comparando el lenght que me retorna
        //si es mayor al de scoreList antes
        return getUserScores(user)
    } 
    else 
        return undefined */

    //console.log(nuevo);
    return nuevo

}

const rankingScore = async() =>{

    const ranking = await UserScore.findAll({
        attributes: [[Sequelize.fn('distinct', Sequelize.col('username')) ,'username'],'score','date'],
        where: {
            score: [Sequelize.literal('(SELECT MAX(s1.score) FROM scores s1 WHERE s1.username = scores.username)')]
          },
          order: [
            ['score', 'DESC']
          ]
        });
    
    console.log(ranking);
    return ranking;

}

module.exports = {getScoreList,getUserScores,getMaxUserScore,getLastUserScore,newUserScores, rankingScore};
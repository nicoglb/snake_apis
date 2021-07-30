const express = require('express');
const cors = require('cors');

//const { router } = require('./users/users.routes');
const usersRouter  = require('./users/users.routes');
const scoreRouter  = require('./score/score.routes');

const app = express();

app.use(express.json());

app.use('/v1/users', usersRouter);
app.use('/v1/score', scoreRouter);

module.exports = { app };
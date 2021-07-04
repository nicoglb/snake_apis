const express = require('express');

//const { router } = require('./users/users.routes');
const usersRouter  = require('./users/users.routes');

const app = express();

app.use(express.json());

app.use('/v1/users', usersRouter);

module.exports = { app };
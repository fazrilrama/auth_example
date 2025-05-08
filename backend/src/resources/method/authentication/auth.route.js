const routes = require('express').Router();
const { login, register } = require('./auth.controller');

routes.post('/login', login);
routes.post('/register', register);

module.exports = routes;
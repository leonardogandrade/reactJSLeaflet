const express = require('express');
const routes = express.Router();
const MapController = require('./controllers/MapControoller');

routes.post('/',MapController.store);
routes.get('/',MapController.listAll);

module.exports = routes;
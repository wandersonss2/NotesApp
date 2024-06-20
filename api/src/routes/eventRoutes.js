const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const middleware = require('../../middleware');

router.post('/criar', middleware, eventController.createEvent);
router.get('/getall', middleware, eventController.getAllEvents);
router.get('/getone/:id', middleware, eventController.getEventById); // Atualizar para aceitar ID como parâmetro
router.put('/eventupdt/:id', middleware, eventController.updateEvent); // Atualizar para aceitar ID como parâmetro
router.delete('/eventdelet/:id', middleware, eventController.deleteEvent); // Atualizar para aceitar ID como parâmetro

module.exports = router;

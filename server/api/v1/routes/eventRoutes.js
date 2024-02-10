const express = require('express');
const { validateEvent } = require('../validators/eventValidator');
const eventController = require('../controllers/eventController');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/', validateEvent, validateRequest, eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', validateEvent, validateRequest, eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;


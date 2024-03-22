const express = require('express');
const analyticsController = require('../controllers/analyticsController');
const router = express.Router();

router.post('/event', analyticsController.logEvent);
router.get('/events', analyticsController.getAllEvents);
router.get('/events/:eventType', analyticsController.getEventsByType);

module.exports = router;

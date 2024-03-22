const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const router = express.Router();

router.get('/:userId', dashboardController.getDashboardByUserId);
router.post('/addWidget', dashboardController.addWidgetToDashboard);
router.post('/removeWidget', dashboardController.removeWidgetFromDashboard);

module.exports = router;

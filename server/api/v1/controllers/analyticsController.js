const analyticsService = require('../services/analyticsService');

exports.logEvent = async (req, res) => {
    try {
        const event = await analyticsService.logEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await analyticsService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEventsByType = async (req, res) => {
    try {
        const events = await analyticsService.getEventsByType(req.params.eventType);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

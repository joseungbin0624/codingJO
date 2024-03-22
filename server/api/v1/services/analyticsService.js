// analyticsService.js
const Analytics = require('../models/Analytics');

async function logEvent(eventData) {
    const event = new Analytics(eventData);
    await event.save();
    return event;
}

async function getAllEvents() {
    return await Analytics.find({});
}

async function getEventsByType(eventType) {
    return await Analytics.find({ event: eventType });
}

module.exports = { logEvent, getAllEvents, getEventsByType };

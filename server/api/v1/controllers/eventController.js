const eventService = require('../services/eventService');

async function createEvent(req, res) {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllEvents(req, res) {
  try {
    const events = await eventService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getEventById(req, res) {
  try {
    const event = await eventService.getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateEvent(req, res) {
  try {
    const updatedEvent = await eventService.updateEvent(req.params.id, req.body);
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteEvent(req, res) {
  try {
    const deletedEvent = await eventService.deleteEvent(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };

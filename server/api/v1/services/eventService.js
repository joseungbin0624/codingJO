const Event = require('../models/Event');

async function createEvent(eventData) {
  const event = new Event(eventData);
  await event.save();
  return event;
}

async function getAllEvents() {
  return await Event.find({});
}

async function getEventById(id) {
  const event = await Event.findById(id);
  if (!event) {
    throw new Error('Event not found');
  }
  return event;
}

async function updateEvent(id, updateData) {
  const event = await Event.findByIdAndUpdate(id, updateData, { new: true });
  if (!event) {
    throw new Error('Event not found');
  }
  return event;
}

async function deleteEvent(id) {
  const event = await Event.findByIdAndDelete(id);
  if (!event) {
    throw new Error('Event not found');
  }
  return event;
}

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };


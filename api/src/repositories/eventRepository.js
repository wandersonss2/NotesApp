// src/repositories/eventRepository.js
const Event = require('../models/eventModel');

class EventRepository {
  async create(event) {
    return await Event.create(event);
  }

  async findAll() {
    return await Event.find();
  }

  async findById(id) {
    return await Event.findById(id);
  }

  async update(id, event) {
    return await Event.findByIdAndUpdate(id, event, { new: true });
  }

  async delete(id) {
    return await Event.findByIdAndDelete(id);
  }
}

module.exports = new EventRepository();

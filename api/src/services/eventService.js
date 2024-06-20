// src/services/eventService.js
const eventRepository = require('../repositories/eventRepository');

class EventService {
  async createEvent(event) {
    // Verificar se a data é uma string e converter para o formato ISO 8601
    if (typeof event.date === 'string') {
      event.date = new Date(event.date.split('/').reverse().join('-'));
    }
    return await eventRepository.create(event);
  }

  async getAllEvents() {
    return await eventRepository.findAll();
  }

  async getEventById(id) {
    return await eventRepository.findById(id);
  }

  async updateEvent(id, event) {
    // Verificar se a data é uma string e converter para o formato ISO 8601
    if (typeof event.date === 'string') {
      event.date = new Date(event.date.split('/').reverse().join('-'));
    }
    return await eventRepository.update(id, event);
  }

  async deleteEvent(id) {
    return await eventRepository.delete(id);
  }
}

module.exports = new EventService();

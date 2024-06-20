// src/controllers/eventController.js
const eventService = require('../services/eventService');

class EventController {
  async createEvent(req, res) {
    try {
      const { title, description, date } = req.body;

      // Verificar se a data é uma string e converter para o formato ISO 8601
      let isoDate;
      if (typeof date === 'string') {
        isoDate = new Date(date.split('/').reverse().join('-'));
      } else {
        isoDate = date;
      }

      const event = await eventService.createEvent({ title, description, date: isoDate });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllEvents(req, res) {
    try {
      const events = await eventService.getAllEvents();
      const formattedEvents = events.map(event => ({
        id: event._id,
        title: event.title,
        description: event.description,
        date: event.date,
        // Add other fields as necessary
      }));
      res.status(200).json(formattedEvents);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getEventById(req, res) {
    try {
      const event = await eventService.getEventById(req.params.id);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateEvent(req, res) {
    try {
      const { title, description, date } = req.body;

      // Verificar se a data é uma string e converter para o formato ISO 8601
      let isoDate;
      if (typeof date === 'string') {
        isoDate = new Date(date.split('/').reverse().join('-'));
      } else {
        isoDate = date;
      }

      const event = await eventService.updateEvent(req.params.id, { title, description, date: isoDate });
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteEvent(req, res) {
    try {
      const event = await eventService.deleteEvent(req.params.id);
      if (event) {
        res.status(200).json({ message: 'Event deleted' });
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EventController();

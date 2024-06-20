const Signup = require('../models/signupModel');
const Event = require('../models/eventModel');
const User = require('../models/userModel');

const signupForEvent = async (req, res) => {
    try {
      const { userId, eventId } = req.body;
  
      // Check if the user is already signed up for the event
      const existingSignup = await Signup.findOne({ user: userId, event: eventId });
      if (existingSignup) {
        return res.status(400).json({ message: 'User is already signed up for this event.' });
      }
  
      const signup = new Signup({ user: userId, event: eventId });
      await signup.save();
  
      res.status(201).json({ message: 'User signed up for event successfully.', signup });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    signupForEvent,
  };
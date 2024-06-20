const express = require('express');
const router = express.Router();
const { signupForEvent } = require('../controllers/signupController');

// Route to sign up for an event
router.post('/create', signupForEvent);

module.exports = router;

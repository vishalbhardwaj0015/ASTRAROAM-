const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Booking = require('../models/Booking');

router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('phone').matches(/^[6-9]\d{9}$/).withMessage('Valid 10-digit phone required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('dreamDestination').trim().notEmpty().withMessage('Destination is required'),
  body('travelType').trim().notEmpty().withMessage('Travel type is required'),
  body('people').isInt({ min: 1 }).withMessage('At least 1 person required'),
  body('date').notEmpty().withMessage('Travel date is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, phone, email, dreamDestination, travelType, people, date, message } = req.body;
    const booking = await Booking.create({
      name,
      phone,
      email,
      destination: dreamDestination,
      travelType,
      people: parseInt(people),
      date,
      message: message || null,
    });
    res.status(201).json({ success: true, message: 'Booking request submitted successfully', data: booking });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Review = require('../models/Review');

router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
  body('review').trim().notEmpty().withMessage('Review is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, rating, review } = req.body;
    const newReview = await Review.create({ name, rating, review });
    res.status(201).json({ success: true, message: 'Review submitted. It will appear after approval.', data: newReview });
  } catch (err) {
    console.error('Review error:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { approved: true },
      order: [['createdAt', 'DESC']],
    });
    res.json({ success: true, data: reviews });
  } catch (err) {
    console.error('Reviews fetch error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;

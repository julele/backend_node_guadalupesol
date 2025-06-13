const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');

router.get('/testimonials', testimonialController.getAllTestimonials);
router.post('/testimonials', testimonialController.createTestimonial);
router.put('/testimonials/:id', testimonialController.updateTestimonial);
router.delete('/testimonials/:id', testimonialController.deleteTestimonial);

module.exports = router;
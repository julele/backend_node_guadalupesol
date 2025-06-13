const express = require('express');
const router = express.Router();
const featuredController = require('../controllers/featuredController');

router.get('/featured', featuredController.getFeatured);
router.post('/featured', featuredController.createFeatured);
router.put('/featured/:id', featuredController.updateFeatured);
router.delete('/featured/:id', featuredController.deleteFeatured);

module.exports = router;
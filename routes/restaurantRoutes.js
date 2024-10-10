const express = require('express');
const { createRestaurant, addMenuItem } = require('../controllers/restaurantController');
const { auth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createRestaurant);
router.post('/:restaurantId/menu', auth, addMenuItem);

module.exports = router;

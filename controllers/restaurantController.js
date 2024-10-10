const Restaurant = require('../models/restaurantModel');

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.addMenuItem = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    restaurant.menu.push(req.body);
    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

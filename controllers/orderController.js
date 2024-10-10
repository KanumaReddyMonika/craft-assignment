const Order = require('../models/orderModel');

exports.placeOrder = async (req, res) => {
  try {
    const { restaurantId, items, deliveryAddress, totalCost, estimatedDeliveryTime } = req.body;
    const order = new Order({
      userId: req.user.userId,
      restaurantId,
      items,
      deliveryAddress,
      totalCost,
      estimatedDeliveryTime
    });
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

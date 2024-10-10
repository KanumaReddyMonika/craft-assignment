const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  deliveryAddress: { type: String, required: true },
  totalCost: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'In Progress', 'Out for Delivery', 'Delivered'], default: 'Pending' },
  estimatedDeliveryTime: { type: String },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

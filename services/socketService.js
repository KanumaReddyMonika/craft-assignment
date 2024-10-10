exports.setupSocket = (io) => {
    io.on('connection', (socket) => {
      console.log('Client connected');
  
      socket.on('trackOrder', (orderId) => {
        // Simulate real-time order status updates
        setTimeout(() => socket.emit('orderStatus', 'Confirmed'), 2000);
        setTimeout(() => socket.emit('orderStatus', 'In Progress'), 5000);
        setTimeout(() => socket.emit('orderStatus', 'Out for Delivery'), 8000);
        setTimeout(() => socket.emit('orderStatus', 'Delivered'), 12000);
      });
  
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  };
  
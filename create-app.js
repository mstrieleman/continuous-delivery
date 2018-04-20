const express = require('express');

const inventoryItems = {
  name: 'Continous Delivery Part One',
  description: 'A practice repository for testing and deployment.'
};

module.export = function createApp() {
  const app = express();

  app.get('/', (req, res) => {
    res.json(inventoryItems);
  });

  return app;
};

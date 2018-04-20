const express = require('express');
const app = express();

const inventoryItems = {
  name: 'Continous Delivery Part One',
  description: 'A practice repository for testing and deployment.'
};

app.get('/', (req, res) => {
  res.json(inventoryItems);
});

app.listen(3000, () => {
  console.log('Listening on 3000!');
});

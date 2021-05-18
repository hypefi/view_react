const express = require('express');
const cors = require('cors');
const connectToMongo = require('./connectToMongo');

const startServer = async ({
  port,
  mongo: mongoConfig,
}) => {
  const app = express();
  app.use(
    cors({ origin: '*' })
  );
  app.use(express.json());

  // Dependencies for route handlers
  const db = await connectToMongo(mongoConfig);

  // Set up routes
  app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello world');
  });

  app.listen(port, () => console.log('server listening on', port));
};

module.exports = startServer;

const startInMemoryMongo = require('./setup/startInMemoryMongo');
const startServer = require('./setup/startServer');

const main = async () => {
  const mongoConfig = await startInMemoryMongo();
  const config = {
    port: 8000,
    mongo: mongoConfig,
  };
  startServer(config);
};

main();

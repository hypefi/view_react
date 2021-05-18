const { MongoMemoryServer } = require('mongodb-memory-server');

const startInMemoryMongo = async () => {
  const mongod = new MongoMemoryServer();

  const [uri, dbName] = await Promise.all([
    mongod.getUri(),
    mongod.getDbName(),
  ]);

  return { uri, dbName };
};

module.exports = startInMemoryMongo;
